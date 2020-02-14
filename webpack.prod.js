const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development'
            },
          },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' }
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].min.css',
      chunkFilename: 'styles/[id].css',
    }),
  ]
});
