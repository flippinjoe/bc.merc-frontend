const webpack = require('webpack')
const commonPaths = require('./common-paths');

const port = process.env.PORT || 8080;

module.exports = {
  mode: 'development',

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  entry: {
    app: `${commonPaths.appEntry}/index.tsx`,
  },
  output: {
    filename: "[name].[hash].js",
  },

  resolve: {
    

    alias: {
      "react-dom": "@hot-loader/react-dom",
    }
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
      options: {
        tslint: {
          failOnHint: true
        },
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    host: "0.0.0.0",
    port: port,
    historyApiFallback: true,
    hot: true,
    open: true,
  },
};