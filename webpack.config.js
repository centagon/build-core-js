
module.exports = {
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules\/(?!(centagon-primer|centagon-build-core-js)\/).*/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        ]
      }
    ]
};