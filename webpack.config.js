const path = require('path');
const webpack = require('webpack')
const AssetsWebpackPlugin = require('assets-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const __basedir = path.join(__dirname, '..')
const WebpackMd5Hash = require('webpack-md5-hash')
const DiskPlugin = require('webpack-disk-plugin')
const fileRoot = process.cwd()

const extractSass = new ExtractTextPlugin({
    filename: '[name].[hash].css',
    disable: process.env.NODE_ENV === 'development'
})

// Write out asset files to disk.
const writeToDisk = new DiskPlugin({
    output: {
        path: path.join(__basedir, '/dist'),
    },
    files: [
        { asset: "assets.json" },
        { asset: /app-[a-f0-9]{20}\.js/ },
        { asset: /vendor-[a-f0-9]{20}\.js/ },
        { asset: /manifest-[a-f0-9]{20}\.js/ },
        { asset: /app-[a-f0-9]{20}\.css/ }
    ]
})

module.exports = {
    entry: {
        app: [
            './src/js/index.js'
        ]
    },


    // output: {
    //     filename: '[name].[hash].js',
    //     path: path.resolve(fileRoot, 'build/public')
    //   }
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
        library: 'state',
        libraryTarget: 'umd',
        chunkFilename: '[name].[hash].js',
    },
    resolve: {
        extensions: ['.js', '.scss', '.css'],
        modules: ['src/js', 'node_modules', 'src/styles']
    },
    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: path.join(__dirname, 'src/js')
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1
                            }
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ],
                    // use style-loader in development
                    fallback: 'style-loader'
                }),
                include: path.join(fileRoot, 'src')
            }
            // {
            //     test: /\.s?css$/,
            //     use: ExtractTextPlugin.extract(
            //         {
            //             fallback: 'style-loader',
            //             use: ['css-loader', 'sass-loader']
            //         }),
            //     include: path.join(__dirname, 'src/styles')
            //     //use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            // },

        ]
    },
    plugins: [
        // Scopes all modules into one closure
        // https://webpack.js.org/plugins/module-concatenation-plugin/
        new webpack.optimize.ModuleConcatenationPlugin(),
        writeToDisk,
        new webpack.optimize.SplitChunksPlugin(
            {
                splitChunks: {
                    cacheGroups: {
                        commons: {
                            test: /[\\/]node_modules[\\/]/,
                            name: "vendors",
                            chunks: "all"
                        }
                    }
                }
                // splitChunks: {
                //     chunks: "async",
                //     minSize: 30000,
                //     minChunks: 1,
                //     maxAsyncRequests: 5,
                //     maxInitialRequests: 3,
                //     automaticNameDelimiter: '~',
                //     name: true,
                //     cacheGroups: {
                //         vendors: {
                //             test: /[\\/]node_modules[\\/]/,
                //             priority: -10
                //         },
                //         default: {
                //             minChunks: 2,
                //             priority: -20,
                //             reuseExistingChunk: true
                //         }
                //     }
                // }

            }
        ),

        // Extract all 3rd party modules into a separate 'vendor' chunk
        // new webpack.optimize.SplitChunksPlugin({
        //     name: 'vendor',
        //     minChunks: ({ resource }) => /node_modules/.test(resource),
        // }),

        // new webpack.optimize.SplitChunksPlugin({
        //     name: "manifest",
        //     minChunks: Infinity
        // }),
        new AssetsWebpackPlugin({
            filename: 'assets.json',
            path: path.join(__dirname, 'dist')
        }),
        extractSass,
        new HtmlWebpackPlugin({
            filename: path.join(__dirname, 'src/views/layouts', 'main.handlebars'),
            alwaysWriteToDisk: true,
            template: './src/html/template.html',
            inject: 'body'
        }),
        new WebpackMd5Hash(),
        new HtmlWebpackHarddiskPlugin(),

        // Removes previous build prior to building the bundle
        new CleanWebpackPlugin([path.join(__dirname, 'dist')], {
            root: path.join(fileRoot),
            verbose: true
        }),
    ]
};
