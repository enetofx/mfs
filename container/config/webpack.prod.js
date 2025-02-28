const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/container/latest/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: `marketing@${domain}/marketing/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);

// filename: '[name].[contenthash].js',
//    We're gonna first put down the name of the file that was created, and then a hash
//    of the contents of the file. This is done primarily for caching issues.

// process.env.PRODUCTION_DOMAIN
//    This environment variable is going to be defined
//    when we build our application through our CI/CD pipeline


// `marketing@${domain}/marketing/remoteEntry.js`
//    We're going to assume that remoteEntry is nested inside a folder called "marketing"
