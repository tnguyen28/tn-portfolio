const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";
// Public URL of the deployed site, e.g. https://tylernguyen.dev. Used for
// link-preview tags, which need absolute URLs. Optional.
const siteUrl = (process.env.SITE_URL || "").replace(/\/+$/, "");

module.exports = {
  mode: isProduction ? "production" : "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      templateParameters: { siteUrl },
    }),
    // Icons, manifest and preview image are served as-is from public/.
    new CopyPlugin({
      patterns: [{ from: "public", globOptions: { ignore: ["**/index.html"] } }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(eot|ttf|woff|woff2|png|jpg|gif|jpeg)$/i,
        type: "asset",
      },
      {
        // Emitted as a separate file so it can be linked and downloaded.
        test: /\.pdf$/i,
        type: "asset/resource",
      },
      {
        // SVGs are imported as React components.
        test: /\.svg$/i,
        use: ["@svgr/webpack"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
  },
};
