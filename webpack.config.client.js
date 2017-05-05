var path = require('path');

module.exports = {
  entry: './client/index.jsx',
  output: {
    path: __dirname,
    filename: './dist/client.js'
  },
  resolve: {
      modules: [
          path.join(__dirname, "app"),
          'node_modules',
          './app'
      ],
      extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'latest', 'stage-2']
        }
      }, {
          test: /\.scss$/,
          loaders: [
              'style-loader', 
              'css-loader?sourceMap',
              'sass-loader?sourceMap'
          ]
      }
    ]
  }
}

