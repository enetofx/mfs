const { merge } = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');


const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8081/'
  },
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: '/index.html',
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/bootstrap',
      },
      shared: packageJson.dependencies
    }),
    new HTMLWebpackPlugin({
      template: './public/index.html',
    })
  ]
};

module.exports = merge(commonConfig, devConfig);

// webpack-merge
//    So this merge function is what's going to allow us to take all the config that we just wrote out
//    inside that common file and merge it together with a configuration that we're about to write
//    inside this development file.

