import * as path from 'path';
import * as webpack from 'webpack';
import * as autoprefixer from 'autoprefixer';

const config: webpack.Configuration = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.css', ".json"]
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'awesome-typescript-loader'
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
                autoprefixer()
              ]
            }
          }
        ]
      }
    ]
  },
  devServer: {
    inline: true,
    contentBase: path.resolve(process.cwd(), './dist'),
    publicPath: 'http://localhost:8080/',
    stats: {
      assets: false,
      modules: false
    }
  }
};

export default config;
