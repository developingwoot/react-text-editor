var webpack = require("webpack");
var path = require("path");
var debug = process.env.NODE_ENV !== "production";

var DEV = path.resolve(__dirname, "src/");
var OUTPUT = path.resolve(__dirname, "dist/");

var config = {
  entry: DEV + "/index.js" ,
  devtool: debug ? "inline-sourcemap" : null,
  output: {
    path: OUTPUT,
    filename: "react-text-editor.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false }),
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        include: DEV,
        loader: "babel-loader",
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  }
};

module.exports = config;