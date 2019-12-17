// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const custom = require('../internals/webpack/webpack.dev.babel');

module.exports = async ({ config, mode }) => {
  return {
    ...config,
    resolve: { ...config.resolve, ...custom.resolve },
  };
};