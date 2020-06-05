const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');



module.exports = (env, options) => {
  const devMode = options.mode !== 'production';

  return {
    entry: './src/index.tsx',
    devServer: {
      historyApiFallback: true,
    },

    resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: ['.ts', '.tsx', '.js'],
    },

    module: {
      rules: [
        {
          test: /\.css$/i,
          loader: 'style-loader!css-loader'
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'assets/[name].[ext]',
              },
            }
          ]
        }
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin([{
        from: 'public/assets',
        to: 'public/assets'
      }, {
        from: 'public/data',
        to: 'public/data'
      }]),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
        ignoreOrder: false,
      }),
      new HtmlWebPackPlugin({
        template: './public/index.html',
        filename: './index.html',
      }),
      new webpack.DefinePlugin({
        'process.env.API_URL': JSON.stringify('https://:5000/'),
      }),
    ],
    output: {
      path: path.resolve('dist'),
      filename: 'bundle.js',
      publicPath: '/',
    },
  };
};
