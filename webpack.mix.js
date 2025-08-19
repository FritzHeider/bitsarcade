const mix = require('laravel-mix');

mix.js('resources/js/bootstrap.js', 'public/js')
   .js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');

mix.env({
    API_URL: process.env.API_URL
});
