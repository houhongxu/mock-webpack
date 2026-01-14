import { WebpackOptions } from '../declarations/WebpackOptions'
import Compiler from './Compiler'
import webpack from './webpack'

export { Compiler }
export default webpack

export type Configuration = WebpackOptions
