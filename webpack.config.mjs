// @ts-check
import { builtinModules } from "node:module";
import path from "node:path";
import webpack from "webpack";

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
      type: "module",
    },
    chunkLoading: "import",
    workerChunkLoading: "import",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  externalsPresets: {
    node: false,
  },
  externalsType: "commonjs",
  externals: [
    ({ request }, callback) => {
      if (!request) {
        return callback();
      }

      const requestName = request.startsWith("node:")
        ? request.slice("node:".length)
        : request;

      if (builtinModules.includes(requestName)) {
        return callback(null, `commonjs ${request}`);
      }

      return callback();
    },
  ],
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
  plugins: [
    new webpack.BannerPlugin({
      banner:
        `import { createRequire as __webpack_create_require } from "node:module";
const require = __webpack_create_require(import.meta.url);`,
      raw: true,
      entryOnly: true,
    }),
  ],
  experiments: {
    outputModule: true,
  },
};
