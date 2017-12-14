/// <binding BeforeBuild='Run - Development' />
"use strict";

var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        //polyfills: "./Front/Scripts/polyfills.ts",
        main: "./Front/main.tsx"
    },

    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.jsx', '.json', '.css']
    },

    output: {
        // ReSharper disable once UndeclaredGlobalVariableUsing
        path: path.join(__dirname, "./wwwroot/Scripts/"),
        filename: "[name].js"
    },

    devServer: {
        contentBase: ".",
        host: "localhost",
        port: 9000
    },

    module: {
        loaders: [
            {
                test: /\.tsx?$/, exclude: /node_modules/, loader: "awesome-typescript-loader"
            },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },

    plugins: [
        new CleanWebpackPlugin()
    ]
};