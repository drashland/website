const path = require('path')
module.exports = {
  entry: {
    app: './components/App.tsx'
  },
  output: {
    filename: "[name].js",
    path: __dirname + '/public/'
  },
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
    alias: {
      react: path.resolve('./node_modules/react')
    },
    extensions: ['.tsx', '.js']
  }
}