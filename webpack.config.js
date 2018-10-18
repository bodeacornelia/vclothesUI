const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: {
    app: './src/index.jsx',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {minimize: true}
          }
        ]
      }
    ]
  },
  plugins: [htmlPlugin]
};