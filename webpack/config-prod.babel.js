/**
 * webpack configuration for development
 */

import path from 'path';
import webpack from 'webpack';

export default {
    devtool: 'source-map',
    entry: [
        path.join(process.cwd(), 'src/index.js'),
    ],
    output: {
        filename: 'bundle.js',
        path: path.join(process.cwd(), 'public', 'js'),
        publicPath: '/js'
    },
    module: {
        rules: [
            /*
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_module|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            },
            */
            {
                test: /\.(s)?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.svg$/,
                use: 'svg-inline-loader'
            },
            {
                test: /\.(jpe?g|png|gif|ico)$/,
                use: 'file-loader'
            },
            {
                test: /\.js?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            'transform-inline-environment-variables',
                            'syntax-object-rest-spread'
                        ]
                    },
                },
                exclude: /(node_module|bower_components)/
            },
            {
                test: /\.json$/,
                user: 'json-loader',
            },
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.optimize.UglifyJsPlugin(),
    ],
    target: 'web'
};
