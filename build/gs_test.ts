import Logger from './Logger.ts'



function t1() {
  console.log("---------------------");
  let logger = new Logger()
  logger.set_GMT('GMT+8')
  logger.set_sheet_id("1lqlqztKroBwDZ--VxoYN9Hh_BuwOzbdbowltI7yf2N4")
  logger.set_level('WARNING')
  logger.set_use_sheet(true)

  console.log(logger.get_config())

  let levels = logger.levels
  logger.log(levels.CRITICAL, '這是測試 CRITICAL')
  logger.log(levels.ERROR, '這是測試 ERROR')
  logger.log(levels.WARNING, '這是測試 WARNING')
  logger.log(levels.DEBUG, '這是測試 DEBUG')
  logger.log(levels.INFO, '這是測試 INFO')
  logger.log(levels.NOTSET, '這是測試 NOTSET')
  logger.critical('這是測試 CRITICAL 2')
  logger.error('這是測試 ERROR 2')
  logger.warning('這是測試 WARNING 2')
  logger.debug('這是測試 DEBUG 2')
  logger.info('這是測試 INFO 2')
  logger.notest('這是測試 NOTSET 2')
}

function t2() {
  console.log("---------------------");
  let logger = new Logger()
  console.log(logger.get_config())

  let levels = logger.levels
  logger.log(levels.CRITICAL, 'logger.log這是測試 CRITICAL');
  logger.log(levels.ERROR, 'logger.log這是測試 ERROR');
  logger.log(levels.WARNING, 'logger.log這是測試 WARNING');
  logger.log(levels.DEBUG, 'logger.log這是測試 DEBUG');
  logger.log(levels.INFO, 'logger.log這是測試 INFO');
  logger.log(levels.NOTSET, 'logger.log這是測試 NOTSET');
  logger.critical('這是測試 CRITICAL 2')
  logger.error('這是測試 ERROR 2')
  logger.warning('這是測試 WARNING 2')
  logger.debug('這是測試 DEBUG 2')
  logger.info('這是測試 INFO 2')
  logger.notest('這是測試 NOTSET 2')
}
