const merge = require('webpack-merge');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 3000,
    contentBase: 'public',
    hot: false,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: true }  },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ],
      },
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      files: [
        'app/**/*',
        'bootstrap/**/*',
        'config/**/*',
        'resources/views/**/*',
        'routes/**/*'
      ],
      notify: true,
    })
  ]
});
