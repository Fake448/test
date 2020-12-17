const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");


module.exports = merge(common, {
   mode: "development",
   output: {
      path: path.resolve(__dirname, "build_webpack"),
      filename: "index.js",
   },
   devServer: {
      //open broser
      open: true,
      //react need for page-go-back
      historyApiFallback: true,
   },
});
