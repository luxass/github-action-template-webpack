// @ts-check
import path from "node:path";

export default {
  target: "node",
  mode: "production",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(import.meta.dirname, "dist"),
    filename: "index.js",
    module: true,
    chunkFormat: "module",
    library: {
      type: "modern-module",
    },
    chunkLoading: "import",
    workerChunkLoading: "import",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "swc-loader",
        },
      },
    ],
  },
  optimization: {
    minimize: false,
  },
  experiments: {
    outputModule: true,
  },
};
