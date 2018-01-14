'use strict';

const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const postcss = require('postcss');
const cssNext = require('postcss-cssnext');
const atImport = require("postcss-import")
const cssnano = require('cssnano');
const ejs = require('ejs');

const webpackConfig = require('./webpack.config.js');

const templatePath = 'src/templates/index.ejs';
const htmlFileOutputPath = 'index.html';
const cssFileInputPath = 'src/css/style.css';

const cache = new Map();
const env = process.env.NODE_ENV || 'development';
const time = new Date().toISOString();

console.log(`🚀 Starting ${env} build... [${time}]\n`);

run();

async function run() {
  const results = await buildJs(webpackConfig);
  const css = await buildCss(cssFileInputPath);
  const html = await renderTemplate(templatePath, {
    ...require('./data'),
    css,
    jsPath: `bundle.js?q=${results.hash}`
  });

  await writeFile(path.join(htmlFileOutputPath), html);

  const size = Buffer.byteLength(html, 'utf8')

  console.log(`\nWrote HTML to ${htmlFileOutputPath} (${size / 1000} kB)\n`);
}

async function buildJs(config) {
  return new Promise((resolve, reject) => {
    const compiler = cache.get('compiler') || webpack(config);

    cache.set('compiler', compiler);
    compiler.run((err, stats) => {
      if (err) {
        console.error(err.stack || err);

        if (err.details) {
          console.error(err.details);
        }

        reject(err);
        return;
      }

      console.log(stats.toString({ colors: true, chunks: false }));

      resolve(stats);
    });
  })
}

async function buildCss(inputFilePath) {
  const css = await readFile(inputFilePath);
  const postcssPlugins = [
    atImport(),
    cssNext({
      warnForDuplicates: false,
      features: {
        rem: false
      }
    })
  ];

  if (env === 'production') {
    postcssPlugins.push(cssnano());
  }

  return await postcss(postcssPlugins)
    .process(css, { from: inputFilePath });
}

function renderTemplate(filePath, data) {
  return new Promise((resolve, reject) => {
    ejs.renderFile(filePath, data, {}, (err, html) => {
      err ? reject(err) : resolve(html);
    });
  });
}

function writeFile(filePath, contents) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, contents, (err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
}

function readFile(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf-8', (err, contents) => {
      err ? reject(err) : resolve(contents);
    });
  });
}
