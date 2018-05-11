const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('HtmlWebpackPlugin')
const __basedir = path.join(__dirname, '..')

module.exports = {
    entry: [
        './src/js/index.js'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'global',
        libraryTarget: 'var'
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader']
                    })
                //use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: path.join(__dirname, 'src/js')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin(
            { filename: 'style.[chunkhash].css', disable: false, allChunks: true }
        ),
        new HtmlWebpackPlugin({
            filename: path.join('./src/views/layouts', 'main.handlebars'),
            alwaysWriteToDisk: true,
            template: 'src/html/template.html',
            inject: 'body'
        }),
    ]
};
