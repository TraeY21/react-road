const path = require("path");

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, "transpiled", "index.js"),
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
    },
};