var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

var exclusionRegexs = [
    /node_modules/
];

module.exports = {
    context: __dirname,
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name]',
        library: 'bootstrapDatepicker',
        libraryTarget: 'umd'
    },

    entry: {
        'datepicker.js': path.resolve(__dirname, './src/index.js'),
        'datepicker.css': path.resolve(__dirname, './src/datepicker.scss')
    },

    //stats: 'minimal',

    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'raw',
                exclude: exclusionRegexs
            },
            {
                test: /\.js$/,
                loader: 'ng-annotate!babel',
                exclude: exclusionRegexs
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss-loader?sourceMap!sass?sourceMap')
            }
        ]
    },

    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],

    plugins: [
        new ExtractTextPlugin('/style.css')
    ]
};
