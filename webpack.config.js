const path = require("path");
const ExtractTextPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

var exclusionRegexs = [/node_modules/];

module.exports = {
    context: __dirname,
    devtool: "source-map",
    entry: {
        "datepicker.js": path.resolve(__dirname, "./src/index.js"),
        "datepicker.css": path.resolve(__dirname, "./src/datepicker.scss"),
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name]",
        library: "bootstrapDatepicker",
        libraryTarget: "umd",
    },
    module: {
        rules: [
            { test: /\.html$/, exclude: /node_modules/, use: ["raw-loader"] },
            {
                test: /\.scss$/,
                use: [
                    ExtractTextPlugin.loader,
                    "css-loader",
                    "resolve-url-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [new ExtractTextPlugin({ filename: "./style.css" })],
};
