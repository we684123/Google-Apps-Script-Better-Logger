import Logger from "./Logger.ts";
const enum Levels {
  CRITICAL = 50,
  ERROR = 40,
  WARNING = 30,
  INFO = 20,
  DEBUG = 10,
  NOTSET = 0
}
function t1() {
  console.log("---------------------");

  let logger = new Logger()
  logger.set_sheet_id("1zaZDmDaIzhH0gjWTkz6I620hzOIskX03zuPDdMm2CLc")
  logger.set_level('INFO')

  console.log(logger.get_config())
  logger.log(Levels.CRITICAL, '這是測試')
  logger.log(Levels.ERROR, '這是測試')
  logger.log(Levels.WARNING, '這是測試')
  logger.log(Levels.DEBUG, '這是測試')
  logger.log(Levels.INFO, '這是測試')
  logger.log(Levels.NOTSET, '這是測試')
  logger.critical('t1231')
  logger.error('t1231')
  logger.warning('t1231')
  logger.debug('t1231')
  logger.info('t1231')
  logger.notest('t1231')

}
