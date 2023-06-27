const path = require('path')
const { SRC, DIST, ASSETS } = require('./paths')
var webpack = require("webpack");

module.exports = {
  entry: {
    scripts: path.resolve(SRC, 'js', 'index.js')
  },
  output: {
    // Put all the bundled stuff in your dist folder
    path: DIST,

    // Our single entry point from above will be named "scripts.js"
    filename: '[name].js',

    // The output path as seen from the domain we're visiting in the browser
    publicPath: ASSETS
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: require.resolve('jquery'),
        jQuery: require.resolve('jquery')
    }),
],
}