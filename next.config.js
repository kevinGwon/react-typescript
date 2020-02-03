const withSass = require('@zeit/next-sass');

module.exports = withSass({
  sassLoaderOptions: {
    sourceMap: true,
  },
  cssModules: true,
});
