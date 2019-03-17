import * as path from 'path';
import * as webpack from 'webpack';
import * as autoprefixer from 'autoprefixer';

const config: webpack.Configuration = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  resolve: {
    modules:  [
      path.resolve('./node_modules'),
      path.resolve('./src'),
    ],
    extensions: ['.js', '.ts', '.tsx', '.css', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'awesome-typescript-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]--[local]--[hash:base64:5]',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                autoprefixer(),
              ],
            },
          },
        ],
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    inline: true,
    publicPath: '/dist/',
    stats: {
      assets: false,
      modules: false,
    },
  },
};

export default config;
