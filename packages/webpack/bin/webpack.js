#!/usr/bin/env node
const path = require('path')

const cli = {
  name: 'webpack-cli',
  package: 'webpack-cli',
  binName: 'webpack-cli',
}

const pkgPath = require.resolve(`${cli.package}/package.json`)

require(path.resolve(path.dirname(pkgPath), pkg.bin[cli.binName]))
