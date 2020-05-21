const path = require("path");

module.exports = {
    entry: {
        app: path.resolve(__dirname, "index.jsx")
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "Dist")
    },
    resolve: {
        extensions: [".js", ".jsx",".css"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }, {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
};