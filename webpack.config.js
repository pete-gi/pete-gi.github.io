const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

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
                            importLoaders: 2
                        }
                    },
                    {
                        loader: 'postcss-loader'
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
        }),
        new UglifyJSPlugin({
            uglifyOptions: {
                mangle: false,
                sourcemap: false,
                output: {
                    comments: false
                }
            }
        })
    ]
};

module.exports = config;
