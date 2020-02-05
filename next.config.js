const withSass = require('@zeit/next-sass');
const globImporter = require('node-sass-glob-importer');
const isDev = process.env.NODE_ENV === 'development' ? true : false;

module.exports = withSass({
  webpack: config => {
    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      use: [
        {
          loader: 'sass-loader',
          options: {
            sourceMap: isDev,
            sassOptions: {
              importer: globImporter(),
            },
          },
        },
      ],
    });
    return config;
  },
});
