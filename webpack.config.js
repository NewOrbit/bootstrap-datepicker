var path = require('path');

var exclusionRegexs = [
    /node_modules/
];

module.exports = {
    context: __dirname,
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'datepicker.js',
        library: 'bootstrapDatepicker',
        libraryTarget: 'umd'
    },

    entry: path.resolve(__dirname, './src/index.js'),

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
            }
        ]
    }
};
