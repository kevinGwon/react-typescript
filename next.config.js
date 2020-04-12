const withSass = require('@zeit/next-sass');
const globImporter = require('node-sass-glob-importer');
const isDev = process.env.NODE_ENV === 'development' ? true : false;

module.exports = withSass({
  webpack: (config, { webpack }) => {
    config.node = {
      fs: 'empty',
    };
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});
    config.plugins.push(new webpack.DefinePlugin(env));
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
