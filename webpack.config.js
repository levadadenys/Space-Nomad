module.exports = {
    entry: './src/App.jsx',
    output: {
        filename: 'bundle.js',
        path: './public'
        
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 8080
    },
    devtool: 'eval-source-map',
    module: {
        loaders: [
            {
                test: /\.js?/,
                exclude: /node_modules/,
                loaders: ['react-hot-loader','babel-loader']
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            {
                test: /\.png$/,
                loaders: ['url']
            }
        ]
    },
    resolve: {
        extensions: ['','.js','.jsx']
    }
};