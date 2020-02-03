const withSass = require('@zeit/next-sass');

module.exports = withSass({
  distDir: 'dist',
  sassLoaderOptions: {
    sourceMap: true,
  },
  cssModules: true,
});
