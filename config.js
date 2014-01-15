var path = require('path')
  , env = process.env.NODE_ENV || 'development'
  , root = __dirname
  , static = 'dist'
  , port = 3000;

var config = {
  development: {
    root: root,
    port: port,
    static: path.join(root, static)
  },

  test: {
    root: root,
    port: port,
    static: path.join(root, static)
  },

  production: {
    root: root,
    port: 80,
    static: path.join(root, static)
  }
}

module.exports = config[env];
