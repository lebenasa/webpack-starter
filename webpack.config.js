const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                include: [
                    path.resolve(__dirname, 'src/'),
                ],
                use: [
                    'file-loader?name=[name].[ext]',
                    'extract-loader',
                    'html-loader',
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                include: [
                    path.resolve(__dirname, 'src/'),
                ],
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ]
    }
};
