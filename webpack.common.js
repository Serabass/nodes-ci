const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        app: './resources/scripts/app.ts'
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'public/dist')
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                exclude: /(fonts)/,
                loader: 'file-loader',
                options: {
                    esModule: false,
                    name: '[name].[ext]',
                    outputPath: 'images'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                exclude: /(images)/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts',
                    publicPath: '../fonts/'
                }
            }
        ],
    }
};
