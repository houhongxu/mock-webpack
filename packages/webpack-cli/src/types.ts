import { Command, ParseOptions } from 'commander'
import type { Compiler, Configuration } from 'webpack'

interface WebpackCLICommand extends Command {}

interface IWebpackCLI {
  run(
    args: Parameters<WebpackCLICommand['parseOptions']>[0],
    parseOptions?: ParseOptions,
  ): Promise<void>
}

type WebpackCompiler = Compiler

type WebpackDevServerOptions = {}

type WebpackConfiguration = Configuration

interface WebpackCLIConfig {
  options: WebpackConfiguration | WebpackConfiguration[]
  path: WeakMap<object, string[]>
}

export {
  IWebpackCLI,
  WebpackCompiler,
  WebpackDevServerOptions,
  WebpackCLIConfig,
  WebpackConfiguration,
}
