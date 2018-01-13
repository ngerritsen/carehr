'use strict';

const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const cssnano = require('cssnano');
const htmlMinifier = require('html-minifier');
const ejs = require('ejs');

const templatePath = 'index.ejs';
const htmlFileOutputPath = 'index.html';
const cssFileInputPath = 'style.css';

const production = process.argv.includes('--production');

run();

async function run() {
  const [template, css] = await Promise.all([
    readFile(templatePath),
    production && readFile(cssFileInputPath)
  ]);

  let minifiedCss = '';

  if (production) {
    minifiedCss = await postcss([cssnano]).process(css, { from: undefined });
  }

  const html = ejs.render(template, {
    css: minifiedCss,
    cssPath: cssFileInputPath,
    inlineCss: production
  });

  await writeFile(path.join(htmlFileOutputPath), html);

  const size = Buffer.byteLength(html, 'utf8')

  console.log(`Wrote output to ${htmlFileOutputPath} (${size / 1000} kB)`);
}

function writeFile(filePath, contents) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, contents, (err, res) => {
      if (err) {
        reject(err);
      }

      resolve(res);
    });
  });
}

function readFile(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf-8', (err, contents) => {
      if (err) {
        reject(err);
      }

      resolve(contents);
    });
  });
}
