const path = require('path');

module.exports = {
    context: __dirname,
    entry: path.resolve(__dirname, './src/main.js'),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/env', 
                            '@babel/react'
                        ],
                    }
                },
                
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                type: "asset/resource"
            },
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ]
      },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js',
    },
    devServer: {
      static: path.resolve(__dirname, './dist'),
    },
}