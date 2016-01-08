var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config')

const port = process.env.PORT || 3000

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(port, '0.0.0.0', function (err) {
  if (err) {
    console.log(err)
  }

  console.log(`React Toogle demo listening at http://0.0.0.0:${port}`)
})
