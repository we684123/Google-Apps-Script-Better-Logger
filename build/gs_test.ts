import Logger from './Logger.ts'



function t1() {
  console.log("---------------------");
  let logger = new Logger()
  let levels = logger.levels
  logger.set_GMT('GMT+8')
  logger.set_sheet_id("1lqlqztKroBwDZ--VxoYN9Hh_BuwOzbdbowltI7yf2N4")
  logger.set_level('WARNING')
  logger.set_level(levels.DEBUG)
  logger.set_use_sheet(true)

  console.log(logger.get_config())

  logger.log(levels.EMERGENCY, '這是測試 EMERGENCY !!!!!')
  logger.log(levels.ALERT, '這是測試 ALERT !!!!!')
  logger.log(levels.CRITICAL, '這是測試 CRITICAL !!!!!')
  logger.log(levels.ERROR, '這是測試 ERROR !!!!!')
  logger.log(levels.WARNING, '這是測試 WARNING !!!!!')
  logger.log(levels.DEBUG, '這是測試 DEBUG !!!!!')
  logger.log(levels.INFO, '這是測試 INFO !!!!!')
  logger.log(levels.NOTICE, '這是測試 NOTSET !!!!!')
  logger.emergency('這是測試 EMERGENCY =====')
  logger.alert('這是測試 ALERT =====')
  logger.critical('這是測試 CRITICAL =====')
  logger.error('這是測試 ERROR =====')
  logger.warning('這是測試 WARNING =====')
  logger.debug('這是測試 DEBUG =====')
  logger.info('這是測試 INFO =====')
  logger.notice('這是測試 NOTSET =====')
}

function t2() {
  console.log("---------------------");
  let logger = new Logger()
  console.log(logger.get_config())

  let levels = logger.levels
  logger.log(levels.EMERGENCY, '這是測試 EMERGENCY !!!!!')
  logger.log(levels.ALERT, '這是測試 ALERT !!!!!')
  logger.log(levels.CRITICAL, '這是測試 CRITICAL !!!!!')
  logger.log(levels.ERROR, '這是測試 ERROR !!!!!')
  logger.log(levels.WARNING, '這是測試 WARNING !!!!!')
  logger.log(levels.DEBUG, '這是測試 DEBUG !!!!!')
  logger.log(levels.INFO, '這是測試 INFO !!!!!')
  logger.log(levels.NOTICE, '這是測試 NOTSET !!!!!')
  logger.emergency('這是測試 EMERGENCY =====')
  logger.alert('這是測試 ALERT =====')
  logger.critical('這是測試 CRITICAL =====')
  logger.error('這是測試 ERROR =====')
  logger.warning('這是測試 WARNING =====')
  logger.debug('這是測試 DEBUG =====')
  logger.info('這是測試 INFO =====')
  logger.notice('這是測試 NOTSET =====')
}
