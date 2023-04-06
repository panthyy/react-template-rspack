/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  context: __dirname,
  entry: {
    main: "./src/main.tsx",
  },
  mode: "development",
  output: {
    path: "./dist",
    filename: "[name].[contenthash].js",
  },
  builtins: {
    html: [
      {
        template: "./index.html",
      },
    ],
    minifyOptions: {
      dropConsole: true,
      passes: 2,
    },
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 70 * 1024,
    },
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: "asset",
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["tailwindcss"],
              },
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: "swc-loader",
          options: {
            jsc: {
              transform: {
                react: {
                  runtime: "automatic",
                },
              },
              paths: {
                "@components/*": ["./src/components/*"],
                "@hooks/*": ["./src/hooks/*"],
                "@utils/*": ["./src/utils/*"],
              },
              parser: {
                syntax: "typescript",
                tsx: true,
              },
            },
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true,
  },
};
