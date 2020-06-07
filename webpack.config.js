const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');



module.exports = (env, options) => {
  const devMode = options.mode !== 'production';
  console.log(devMode)

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
            devMode || true ? 'style-loader' : MiniCssExtractPlugin.loader,
            // 'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: devMode || true ? {
                  mode: 'local',
                  exportGlobals: true,
                  localIdentName: '[local]',
                  context: path.resolve(__dirname, 'src'),
                  hashPrefix: 'my-custom-hash',

                } : true,
                // importLoaders: 1,
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
          test: /\.(png|svg|jpe?g|gif)$/,
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
      }, {
        from: 'public/_networking',
        to: 'public/_networking'
      }]),
      // new MiniCssExtractPlugin({
      //   filename: '[name].css',
      //   chunkFilename: '[id].css',
      //   ignoreOrder: false,
      // }),
      new HtmlWebPackPlugin({
        template: './public/index.html',
        filename: './index.html',
      }),
      new webpack.DefinePlugin({
        'process.env.API_URL': JSON.stringify('https://networking.webware-kassel.de:80/'),
      }),
    ],
    output: {
      path: path.resolve('dist'),
      filename: 'bundle.js',
      publicPath: '/',
    },
  };
};
