const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  // File to use during generation
  template: './src/index.html',
  // file name of newly generated file in dist
  filename: './index.html',
});

module.exports = {
  module: {
    // Use entry prop to point to a file other than ./src/index.js
    // entry: "./src/app.js",
    // Specify output example
    // output: {
    //   path: path.resolve('dist'),
    //   filename: 'bundled.js'
    // },
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.css$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: '[name]_[local]_[hash:base64]',
          sourceMap: true,
          minimize: true,
        },
      }],
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          localIdentName: '[name]_[local]_[hash:base64]',
          sourceMap: true,
          minimize: true,
        },
      }, {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
        },
      }],
    }],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [htmlPlugin],
};
