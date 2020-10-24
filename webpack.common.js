const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",

  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[hash].[name].css",
    }),
    new CleanWebpackPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },

      {
        test: /\.html$/i,
        loader: "html-loader",
      },

      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },

      {
        test: /\.csv$/,
        use: ["csv-loader"],
      },

      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[contenthash].[name].[ext]",
            publicPath: "assets/images",
            outputPath: "assets/images",
          },
        },
      },

      {
        test: /\.ttf$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[hash].[name].[ext]",
            publicPath: "assets/fonts",
            outputPath: "assets/fonts",
          },
        },
      },
    ],
  },
};
