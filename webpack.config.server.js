module.exports = {
  entry: './server/server.js',
  output: {
    path: __dirname,
    filename: './dist/server.js'
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
  },
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
}