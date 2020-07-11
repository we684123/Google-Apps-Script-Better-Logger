import Logger from "./Logger.ts";
// const enum Levels {
//   CRITICAL = 50,
//   ERROR = 40,
//   WARNING = 30,
//   INFO = 20,
//   DEBUG = 10,
//   NOTSET = 0
// }
function t1() {
  console.log("---------------------");

  let logger = new Logger()
  logger.set_GMT('GMT+8')
  logger.set_sheet_id("1lqlqztKroBwDZ--VxoYN9Hh_BuwOzbdbowltI7yf2N4")
  logger.set_level('WARNING')
  logger.set_use_sheet(true)

  console.log(logger.get_config())
  logger.log(logger.levels.CRITICAL, '這是測試')
  logger.log(logger.levels.ERROR, '這是測試')
  logger.log(logger.levels.WARNING, '這是測試')
  logger.log(logger.levels.DEBUG, '這是測試')
  logger.log(logger.levels.INFO, '這是測試')
  logger.log(logger.levels.NOTSET, '這是測試')
  logger.critical('t1231')
  logger.error('t1231')
  logger.warning('t1231')
  logger.debug('t1231')
  logger.info('t1231')
  logger.notest('t1231')

}
