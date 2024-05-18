const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        port: 3001, 
        hot: true,
        devMiddleware: {
            stats: {
                children: false
            }
        }
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],
    module: {
        rules: [
            { 
                test: /\.css$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        esModule: true,
                      },
                    },
                    'css-loader',
                ],            }
      ]
    }

}
