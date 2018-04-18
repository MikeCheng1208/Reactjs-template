const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        App: 'App'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js?[hash:8]',
        publicPath: "/"
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    name: 'vendor',
                    chunks: 'initial',
                    enforce: true
                }
            }
        }
    },
    devServer: {
        compress: true,
        port: 3000,
        stats: {
            assets: true,
            cached: false,
            chunkModules: false,
            chunkOrigins: false,
            chunks: false,
            colors: true,
            hash: false,
            modules: false,
            reasons: false,
            source: false,
            version: false,
            warnings: false
        },
        proxy: {
            // '/api/*': {
            //     target: 'http://XXX.com.tw',
            //     changeOrigin: true,
            // },
        },
    },  
    resolve: {
        modules: [
            path.resolve('src'),
            path.resolve('src/html'),
            path.resolve('src/js'),
            path.resolve('src/js/lib'),
            path.resolve('src/api'),
            path.resolve('src/images'),
            path.resolve('node_modules')
        ],
        extensions: ['.js']
    },
    module:{
        rules:[
            {
                test: /\.(sass|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ],
                include: path.resolve('src/css'),
            },
            {
                test: /\.(js)$/,
                use: 'babel-loader',
                include: path.resolve('src')
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: 'url-loader?limit=2000&name=[path][name].[ext]?[hash:8]',
                include: path.resolve('src')
            },
            {
                test: /\.(styl)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'stylus-loader'
                ],
                include: path.resolve('src')
            },
            {
                test: /\.(css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ],
                include: path.resolve('src')
            }
        ]
    },
    resolveLoader: {
        alias: {
            'scss-loader': 'sass-loader',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '標題',
            filename: 'index.html',
            template: 'html/template.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": "jquery"
        })
    ]
};

module.exports = config;
