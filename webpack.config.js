const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env) => {
  const entry = env.development
    ? { bundle: ['./src/index'] }
    : { 'react-image-drag-selector': ['./lib/ReactImageDragSelector.jsx'] };
  const envConfig = env.development
    ? {
        mode: 'development',
        devtool: 'eval-source-map',
        devServer: { open: true, port: 4000 },
      }
    : { mode: 'production' };

  return {
    ...envConfig,
    resolve: { extensions: ['.js', '.jsx'] },
    entry,
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: '/node_modules',
          loader: 'babel-loader',
          options: {
            compact: true,
            minified: true,
            presets: [
              ['@babel/preset-env', { targets: { esmodules: true } }],
              ['@babel/preset-react', { runtime: 'automatic' }],
            ],
          },
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ],
  };
};
