const path = require('path');

module.exports = {
  mode:'development',

  module:{
    rules:[
      {
        test:/\.tsx?$/,
        loader:'babel-loader',
        exclude:/node_modules/,
        options:{
          presets:[
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
          ],
          plugins:[
            '@babel/plugin-proposal-class-properties'
          ]
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  }
}
