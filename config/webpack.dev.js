const path = require('path');

const rootPath = path.join(__dirname, '../src');

module.exports = {
  context: rootPath,
  mode: 'development',
  entry: {
    js: ['babel-polyfill', './index.js'],
  },
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['.js'],
    modules: [rootPath, 'node_modules'],
  },
  output: {
    path: path.join(__dirname, '../src'),
    publicPath: '/',
    filename: 'bundle.js',
    sourceMapFilename: 'map',
  },

  devServer: {
    hot: true,
    host: 'localhost',
    contentBase: path.join(__dirname, '../src'),
    noInfo: false,
    historyApiFallback: true,
    publicPath: '/',
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|eot|ttf|woff2|woff?)$/i,
        exclude: /banners/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
          },
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: 'eslint-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules|\.tpl\./,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]',
              minimize: { safe: true },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, './postcss.config.js'),
              },
            },
          },
        ],
      },
    ],
  },
};
