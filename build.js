'use strict';

const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const cssnano = require('cssnano');
const htmlMinifier = require('html-minifier');

const htmlFileInputPath = 'index.src.html';
const htmlFileOutputPath = 'index.html';
const cssFileInputPath = 'style.css';
const linkTag = '<link rel="stylesheet" href="style.css">';

run();

async function run() {
  const [html, css] = await Promise.all([
    readFile(htmlFileInputPath),
    readFile(cssFileInputPath)
  ]);

  const minifiedCss = await postcss([cssnano]).process(css, { from: undefined });
  const htmlWithCss = html.replace(linkTag, `<style>\n${minifiedCss}\n</style>`);

  await writeFile(path.join(htmlFileOutputPath), htmlWithCss);

  const size = Buffer.byteLength(htmlWithCss, 'utf8')

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
