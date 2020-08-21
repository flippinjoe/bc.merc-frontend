const commonPaths = require('./common-paths');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    vendor: ['react', 'react-dom', 'react-router-dom']
  },
  output: {
    path: commonPaths.outputPath,
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json']
  },
  module: {
    rules: [
        {
          test: /\.tsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.eot(\?.*)?$/,
          loader: 'file-loader?name=fonts/[hash].[ext]'
        },
        {
          test: /\.(woff|woff2)(\?.*)?$/,
          loader: 'file-loader?name=fonts/[hash].[ext]'
        },
        {
          test: /\.ttf(\?.*)?$/,
          loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[hash].[ext]'
        },
        {
          test: /\.svg(\?.*)?$/,
          loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=fonts/[hash].[ext]'
        },
        {
          test: /\.(jpe?g|png|gif)$/i,
          loader: 'url-loader',
          options: {
            esModule: false,
            limit: 10000
          }
        }
      ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        },
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new webpack.EnvironmentPlugin(['API_HOST']),
    new HtmlWebpackPlugin({
      template: `${commonPaths.appEntry}/index.html`,
      favicon: `${commonPaths.appEntry}/favicon.ico`
    })
  ]
};

module.exports = config;