const path = require('path');
const common = require('./webpack.config.common');
const {merge} = require('webpack-merge')

module.exports = merge(common,{
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    cache: false,
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ]
    }
});