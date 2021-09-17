const HtmlWebpackPlugin =  require('html-webpack-plugin')
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
  mode: 'development',
  devServer: {
    port: 8080
  },
  plugins: [
    new ModuleFederationPlugin(
      {
        name: 'container',
        remotes: {
          list: 'list@http://localhost:8081/remoteEntry.js',
          profile: 'profile@http://localhost:8082/remoteEntry.js'
        }
      }
    ),
    new HtmlWebpackPlugin(
      {
        template: './public/index.html'
      }
    )
  ]
}

