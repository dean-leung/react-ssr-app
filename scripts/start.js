const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const { exec } = require('child_process')
const webpackBaseConfig = require('../build/webpack.dev.config')

const webpackServerConfig = merge(webpackBaseConfig, {
  entry: './src/server/server.dev.ts',
  output: { filename: 'server.js' },
  target: 'node'
})

const webpackClientConfig = merge(webpackBaseConfig, {
  entry: './src/client/index.tsx',
  output: {
    path: path.resolve(__dirname, '../dist/static'),
    filename: 'client.js'
  }
})

const serverCompiler = webpack(webpackServerConfig)
const clientCompiler = webpack(webpackClientConfig)
const compiler = webpack([webpackClientConfig, webpackServerConfig])

compiler.watch({ ignored: /node_modules/, poll: 1000 }, (err, stats) => {
  if (err || stats.hasErrors()) {
    if (err) console.log(err)
    const info = stats.toJson()
    // console.log(info.errors)
    info.errors.forEach(error => console.log(error))
  }

  console.log('file is changed')
})
