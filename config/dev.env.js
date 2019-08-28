'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ENV_CONFIG: '"dev"',
  RENDER_MODE: "hash",
  HISTORY_MODE: false,
  STATIC_CONTEXT_PATH: '""',
  BASE_API: '"http://192.168.12.115:8081"'
})
