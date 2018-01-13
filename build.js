'use strict';

const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const atImport = require("postcss-import")
const cssnano = require('cssnano');
const ejs = require('ejs');

const data = require('./data');

const templatePath = 'templates/index.ejs';
const htmlFileOutputPath = 'index.html';
const cssFileInputPath = 'src/style.css';

const production = process.argv.includes('--production');

run();

async function run() {
  let minifiedCss = '';

  if (production) {
    const css = await readFile(cssFileInputPath);

    minifiedCss = await postcss([cssnano])
      .use(atImport())
      .process(css, { from: cssFileInputPath });
  }

  const html = await renderTemplate('./templates/index.ejs', {
    ...data,
    css: minifiedCss,
    cssPath: cssFileInputPath,
    inlineCss: production
  });

  await writeFile(path.join(htmlFileOutputPath), html);

  const size = Buffer.byteLength(html, 'utf8')

  console.log(`Wrote output to ${htmlFileOutputPath} (${size / 1000} kB)`);
}

function renderTemplate(filePath, data) {
  return new Promise((resolve, reject) => {
    ejs.renderFile(filePath, data, {}, (err, html) => {
      err ? reject(er) : resolve(html);
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