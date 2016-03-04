var path = require('path');

module.exports = {
    src: {
        ts: path.join(__dirname, 'src/index.ts'),
        scss: path.join(__dirname, 'src/index.scss'),
        html: path.join(__dirname, 'src/index.html')
    },
    output: {
        dev: {
            js: 'main-dev.js',
            directory: 'build',
            css: 'main-dev.css'
        },
        prod: {
          js: 'main-prod.js',
          directory: 'build',
          css: 'main-prod.css'}
    },
    app: {
        __APP_NAME__: JSON.stringify('app')
    }
};
