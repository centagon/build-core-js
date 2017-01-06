const elixir = require('laravel-elixir');

elixir.config.assetsPath = 'src';
elixir.config.publicPath = 'dist';

elixir(mix => {
    mix.webpack('build-core.js');
});
