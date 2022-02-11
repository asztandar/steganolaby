const path = require("path");
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@images": path.resolve(__dirname, "src/images"),
        "@styles": path.resolve(__dirname, "src/styles"),
      }
    }
  });
}