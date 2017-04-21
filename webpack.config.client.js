module.exports = {
  entry: './app/Layout.jsx',
  output: {
    path: __dirname,
    filename: './dist/client.js'
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
      }
    ]
  }
}

