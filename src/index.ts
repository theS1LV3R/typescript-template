import { config } from 'dotenv';
config();

import Logger from './util/Logger';

const info = 'This uses info level';
const verbose = 'And this has verbose';
const debug = 'And i dont even know why you are debugging at this point';

export function doSomeStuff(
  infoMuch: string,
  verboseMore: string,
  debugWhy: string[]
): void {
  Logger.info(infoMuch);
  Logger.verbose(verboseMore);
  Logger.debug(debugWhy);
}

doSomeStuff(info, verbose, [debug]);
// TODO: more examples
