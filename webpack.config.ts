const HtmlWebPackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path')

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
}); 

const dotenvPlugin = new Dotenv({
  path: path.resolve(__dirname, './.env'), // Path to .env file (this is the default)
  safe: true, // load .env.example (defaults to "false" which does not use dotenv-safe)
  // systemvars: true
});

module.exports = {
  entry: {
    app: './src/index.tsx',
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
    ],
  },
  plugins: [htmlPlugin, dotenvPlugin],
  devServer: {
    port: process.env.FRONTEND_PORT,
  },
};