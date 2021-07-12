const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const getPath = (...p) => path.resolve(process.cwd(), ...p);

module.exports = {
  mode: 'production',
  entry: getPath('src', 'main.ts'),
  output: {
    filename: 'main.js',
  },
  resolve: {
    alias: {
      components: getPath('./src/components'),
      widgets: getPath('./src/widgets'),
      lib: getPath('./src/lib'),
    },
    extensions: ['.js', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.(m?js|jsx|tsx|ts)$/,
        include: getPath('src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: false,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        include: [/node_modules/, /src/],
        use: [
          {
            loader: require.resolve("style-loader", { paths: [__dirname] }),
          },
          {
            loader: require.resolve("css-loader", { paths: [__dirname] }),
            options: {
              modules: false,
            },
          },
        ],
      },

    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'public', to: '.' }],
    }),
  ],
};
