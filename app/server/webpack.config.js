var path = require('path');
var webpack = require('webpack');


const nodeEnv = process.env.NODE_ENV;
const isProduction = nodeEnv === 'production';

//Common plugins
const WrapperPlugin = require('wrapper-webpack-plugin');
const fs = require('fs');
let plugins = [new webpack.NamedModulesPlugin()];

if (!isProduction) {
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

let externals = ['utf-8-validate', 'bufferutil'];

const entry = isProduction ?
  [path.resolve(path.join(__dirname, './src/index.ts'))]
  : ['webpack/hot/poll?1000', path.resolve(path.join(__dirname, './src/index.ts'))];

  module.exports = {
    devtool: 'inline-source-map',
    performance: {
      hints: false
    },
    mode: nodeEnv || 'development',
    entry: entry,
    plugins: plugins,
    output: {
      path: path.resolve(__dirname, './build'),
      filename: 'server.bundle.js'
    },
    target: 'node', // In order to ignore built-in modules like path, fs, etc.
    externals: externals,
    module: {
      rules: [
        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: 'graphql-tag/loader'
        },
        {
          test: /\.ts$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-typescript'],
            }
          }
        },
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            }
          }
        },
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto'
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.mjs', '.ts', '.js', '.json', '.gql'],
      alias: {
        'src': path.resolve(__dirname, './src'),
      },
    }
  };
