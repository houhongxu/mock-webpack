import {
  IWebpackCLI,
  WebpackCLIConfig,
  WebpackCompiler,
  WebpackConfiguration,
  WebpackDevServerOptions,
} from './types'
import { ParseOptions } from 'commander'
import webpack from 'webpack'

class WebpackCLI implements IWebpackCLI {
  webpack!: typeof webpack

  run(args: string[], parseOptions?: ParseOptions | undefined): Promise<void> {
    return Promise.resolve()
  }

  async loadConfig(options: Partial<WebpackDevServerOptions>) {
    return {} as any
  }

  async buildConfig(
    config: WebpackCLIConfig,
    options: Partial<WebpackDevServerOptions>,
  ): Promise<WebpackCLIConfig> {
    return {} as any
  }

  async createCompiler(
    options: Partial<WebpackDevServerOptions>,
  ): Promise<WebpackCompiler> {
    let config = await this.loadConfig(options)

    config = await this.buildConfig(config, options)

    let compiler: WebpackCompiler

    try {
      compiler = this.webpack(config.options as WebpackConfiguration)

      // @ts-expect-error error type assertion
    } catch (error: Error) {
      console.error(error)
    }

    return compiler!
  }
}

export default WebpackCLI
