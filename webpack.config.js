const fs = require("fs");
const path = require("path");
const w_pack = require("webpack");
const autoprefixer = require("autoprefixer");
const html_plugin = require("html-webpack-plugin");
const mini_css = require("mini-css-extract-plugin");
const uglifyJs_plugin = require("uglifyjs-webpack-plugin");

/*
  htmlDir : The path from where the templates files should be collected
  templates : An array to store templates
  minify_options : HTML minification options for dev
*/

let htmlDir = "project/html",
  templates = [],
  minify_options = {
    removeComments: true,
    collapseWhitespace: true,
    removeAttributeQuotes: true,
  };

/*
 * A function to get all pug or html files with their local path
 * NB : any file with .ignore.{ext} will be ignored
 */
var getTemplates = function (dir) {
  var files = [];
  var list = fs.readdirSync(dir);
  list.forEach(function (file) {
    file = dir + "/" + file;
    var stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      files = files.concat(getTemplates(file));
    } else {
      files.push(file);
    }
  });

  files.forEach((file) => {
    if (
      file &&
      !file.match(/\.ignore.pug$/) &&
      (file.match(/\.pug$/) || file.match(/\.html$/))
    ) {
      let filename = file.substring(0, file.length - 4).replace(".", "");
      let ext = file.substr(-4).replace(".", "");
      templates.push(
        new html_plugin({
          template: `${filename}.${ext}`,
          filename:
            path.resolve(__dirname, "template") +
            filename.replace(htmlDir, "") +
            ".html",
          // ↓ comment to ignore minify in dev ↓
          minify: minify_options,
        })
      );
    }
  });
};

getTemplates(htmlDir);

module.exports = {
  entry: "./project/js/plugin.js",
  output: {
    path: path.resolve(__dirname, "template"),
    filename: "app.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [mini_css.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.scss$/,
        exclude: /node_moudles/,
        use: [
          mini_css.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
          "import-glob-loader",
        ],
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        exclude: /node_modules/,
        use: {
          loader: "file-loader",
          options: {
            name: "[contenthash].[ext]",
            outputPath: "assets/images",
          },
        },
      },
      {
        test: /\.(svg)$/,
        exclude: /node_modules/,
        use: {
          loader: "file-loader",
          options: {
            name: "[contenthash].[ext]",
            outputPath: "assets/svg",
          },
        },
      },
      {
        test: /\.(gif)$/,
        exclude: /node_modules/,
        use: {
          loader: "file-loader",
          options: {
            name: "[contenthash].[ext]",
            outputPath: "assets/gif",
          },
        },
      },
      {
        test: /\.pug$/,
        use: ["html-loader", "pug-html-loader?pretty=true"],
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
    ],
  },
  devServer: {
    port: 9000,
    stats: "errors-only",
    hot: true,
    // ↓ open in default browser after start ↓
    open: true,
  },
  plugins: [
    // spread collected templates
    ...templates,
    new mini_css({
      filename: "style.css",
    }),
    new w_pack.HotModuleReplacementPlugin(),
    new w_pack.NamedChunksPlugin(),
    new w_pack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer],
      },
    }),
  ],
  optimization: {
    minimizer: [
      new uglifyJs_plugin({
        exclude: /node_modules/,
      }),
    ],
  },
};
