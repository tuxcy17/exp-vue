const path = require('path');

module.exports = {
  mode: "development",
  // mode: "production",
  entry: {
    "www/public/bundle": "./app/src/ts/index.ts",
    "test/test-bundle": "./app/test/index.ts"
  },

  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      vue: 'vue/dist/vue.esm.js'
    }
  },

  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].js'
  }
};