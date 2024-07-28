// @ts-check
import path from "node:path";

export default {
  target: "node",
  mode: "production",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(import.meta.dirname, "dist"),
    filename: "index.cjs",
    library: {
      type: "commonjs2",
    },
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
};
