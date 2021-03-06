let mix = require('laravel-mix');
mix.js(['resources/assets/js/app.js',
    'resources/assets/js/now-ui-kit.js'], 'public/js/app.js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .options({processCssUrls: false})
    .webpackConfig({output: {chunkFilename: '[name].js?id=[chunkhash]'}})
    .version();
