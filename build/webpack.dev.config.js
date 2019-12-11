const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  'node': 'current'
                }
              }
            ],
            '@babel/preset-react',
            '@babel/preset-typescript'
          ]
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  }
}
