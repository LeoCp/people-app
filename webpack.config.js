const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/app/index.js'
  ],
  output: {
    path: path.join(__dirname, 'src', 'public', 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
   new webpack.HotModuleReplacementPlugin(),
   new webpack.NamedModulesPlugin(),
   new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders:[{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel-loader'
    }]
  },
  devServer: {
    contentBase: "./src/public",
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    hot: true
  }
};
