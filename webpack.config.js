const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "./main.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    watchContentBase: true,
    progress: true
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  }
};