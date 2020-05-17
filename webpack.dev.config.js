
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: './src/index.js',
    output:{
        path:__dirname,
        filename:'./release/bundle.js'
    },
    module:{
        rules:[{
            test: /\.js?$/,
            exclude:/(node_modules)/,
            loader:'babel-loader'
        }]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html')
        })
    ],
    devServer:{
        contentBase: path.join(__dirname + './release'),
        open:true,
        port:9123,
        hot:true
    }
}