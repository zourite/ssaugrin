const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');

(async () => {
    const files = await imagemin(['static/img/**/*.{jpg,png}'], {
        destination: 'build/images',
        preserveDirectories: true,
        plugins: [
          imageminMozjpeg({
            quality : 70,
          }),
          imageminPngquant({
            quality: [0.6, 0.8]
        }),
        imageminWebp({
          quality: 80,
        })
        ]
    });
 
    console.log(files);
    //=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
})();
  