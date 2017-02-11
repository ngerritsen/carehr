'use strict'

const imagemin = require('imagemin')
const imageminMozjpeg = require('imagemin-mozjpeg')
const imageminPngquant = require('imagemin-pngquant')

imagemin(['images/*.{jpg,png}'], 'optimized-images', {
  plugins: [
    imageminMozjpeg(),
    imageminPngquant()
  ]
}).then(files => {
  files.forEach(file => {
    console.log(`Optimized image: "${file.path}".`)
  })
})
