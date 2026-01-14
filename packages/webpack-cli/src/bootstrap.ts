import { IWebpackCLI } from './types'

const WebpackCLI = require('./webpack-cli')

const runCLI = async (args: Parameters<IWebpackCLI['run']>[0]) => {
  const cli = new WebpackCLI()

  try {
    await cli.run(args)
  } catch (error) {
    console.error(error)
  }
}

export default runCLI
