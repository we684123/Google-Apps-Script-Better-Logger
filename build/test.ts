import Logger from "./Logger.ts";
function t1() {
  let logger = new Logger()
  logger.set_sheet_id("1zaZDmDaIzhH0gjWTkz6I620hzOIskX03zuPDdMm2CLc")
  logger.set_level('INFO')

  console.log(logger.get_config())
  logger.log('CRITICAL','這是測試')
  logger
}
