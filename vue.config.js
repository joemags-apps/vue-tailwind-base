const path = require("path");
/**
 * By Joemags
 */
module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@comp": path.resolve(__dirname, "./src/components"),
        "@view": path.resolve(__dirname, "./src/views"),
        "~": path.resolve(__dirname, "./src"),
      },
      extensions: ['.js', '.vue', '.json']
    }
  },
};