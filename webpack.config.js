const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// generate multiple html files
const htmlPageNames = [];
const multipleHtmlPlugins = htmlPageNames.map((name) => {
  return new HtmlWebpackPlugin({
    template: `./src/templates/${name}.html`,
    filename: `${name}.html`,
  });
});

module.exports = {
  // mode: process.env.NODE_ENV,
  mode: 'development',
  entry: {
    index: {
      import: './src/index.ts',
    },
    services: {
      import: './src/services.ts',
    },
    animation: {
      import: './src/canvas.ts',
    },
    video: {
      import: './src/scripts/video.ts',
    },
  },

  devServer: {
    watchFiles: path.join(__dirname, 'src'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/video'),
          to: path.resolve(__dirname, 'public/assets/video'),
        },
      ],
    }),
  ].concat(multipleHtmlPlugins),

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
    clean: true,
  },

  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          filename: 'vendor.js',
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },

    minimizer: ['...', new CssMinimizerPlugin()],
  },

  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.ts', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // {
      //   test: /\.js$/,
      //   use: 'babel-loader',
      //   exclude: /node_modules/,
      // },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              esModule: false,
              // exportType: 'css-style-sheet',
            },
          },
          {
            loader: 'sass-loader',
            options: {
              // webpackImporter: true,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              esModule: false,
              // exportType: 'css-style-sheet',
            },
          },
        ],
      },
      {
        test: /\.(webp|svg|gif|png|avif|jpe?g)$/,
        type: 'asset/resource',
        exclude: [/fonts/],
        generator: {
          filename: (resourcePath) => {
            const currentPath = resourcePath.filename.split('/');
            currentPath.splice(0, 2);
            currentPath.splice(-1, 1);

            if (currentPath.includes('..')) {
              currentPath.splice(0, 1);
            }
            return `./assets/${currentPath.join('/')}/[name][ext]`;
          },
          // filename: './assets/img/[name][ext]',
        },
      },
      {
        test: /\.(svg|woff|woff2|eot|ttf|otf)$/,
        exclude: [/img/],
        type: 'asset/resource',
        generator: {
          filename: './assets/fonts/[name][ext]',
        },
      },
      {
        test: /\.mp4$/,
        type: 'asset/resource',
        generator: {
          filename: './assets/video/[name][ext]',
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: false,
          sources: {
            list: [
              '...',
              {
                tag: 'a',
                attribute: 'href',
                type: 'src',
              },
            ],
          },
        },
      },
    ],
  },
};
