var Webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var Path = require('path');
var BuildDir = Path.resolve(__dirname, 'out/');
var AppDir = Path.resolve(__dirname, 'src/');


var Config = {
    entry: {
        "index": AppDir + './../index.js'
    },
    output: {
        path: BuildDir,
        filename: 'js/[name].js'
    },
    resolve: {
        extensions: [
            ".webpack.js",
            "web.js",
            ".js",
            ".jsx",
            ".css"
        ]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                include: AppDir,
                exclude: /node_modules/,
                loader: ["babel-loader"]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'index.html', to: 'index.html' },
        ])
    ]
};

module.exports = Config;
