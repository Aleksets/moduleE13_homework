const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    mode: 'production',
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },    
    entry: './src/index.js',
    output: {
        filename: 'main.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        port: 3005,
        hot: false,
        liveReload: false,
        devMiddleware: {
            stats: {
                children: false
            }
        }
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: 'Production',
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
