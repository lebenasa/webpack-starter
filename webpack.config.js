const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: [
            '.tsx',
            '.ts',
            '.js',
        ],
    },
    watchOptions: {
        poll: true,
        ignored: [
            'node_modules/**',
            'dist/*.js',
            'dist/*.d.ts',
        ],
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                exclude: /dist/,
                use: [
                    'file-loader?name=[name].[ext]',
                    'extract-loader',
                    'html-loader',
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    transpileOnly: true,
                    experimentalWatchApi: true,
                },
            },
        ]
    },
    plugins: [
    ],
};
