const path = require('path')

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, "assets"),
  output: {
    path: path.resolve(__dirname, 'assets/dist'),
    publicPath: "http://localhost:3000/webpack/",
    filename: 'bundle.js',
  },
  devServer: {
    // static: {
    //   directory: path.resolve(__dirname, './index.php'),
    // },

    port: 3000,
    open: ['webpack'],
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'assets/src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
}
