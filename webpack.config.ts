import * as path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: [
      path.resolve('./node_modules'),
      path.resolve('./src'),
      path.resolve('./data'),
    ],
    alias: {
      '@data': path.resolve(__dirname, 'data'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@states': path.resolve(__dirname, 'src/states'),
      '@libs': path.resolve(__dirname, 'src/libs'),
    },
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            configFile: 'tsconfig.json',
          },
        },
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
