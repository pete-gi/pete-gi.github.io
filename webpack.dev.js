const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const src = 'src';
const dist = 'assets';

const config = {
    entry: {
        index: `./${src}/index.js`
    },
    output: {
        path: path.resolve(__dirname, dist),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(scss|sass|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            processCssUrls: false
                        }
                    }
                ]
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ['@babel/plugin-syntax-dynamic-import']
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ]
};

module.exports = config;
