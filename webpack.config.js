module.exports = {
  entry: './timeline3.js',
  output: {
    path: './',
    filename: 'timeline.bundle.js',
  },
  devServer: {
    inline: true,
    port: 8000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
