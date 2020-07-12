const enum Levels {
  EMERGENCY = 70, //緊急
  ALERT = 60,     //快訊
  CRITICAL = 50,  //重要
  ERROR = 40,     //錯誤
  WARNING = 30,   //警告
  INFO = 20,      //資訊
  DEBUG = 10,     //除錯
  NOTICE = 0      //通知
}
class Logger2 {
  levels: object
  constructor() {
    this.levels = {
      'EMERGENCY': Levels['EMERGENCY'],
      'ALERT': Levels['ALERT'],
      'CRITICAL': Levels['CRITICAL'],
      'ERROR': Levels['ERROR'],
      'WARNING': Levels['WARNING'],
      'INFO': Levels['INFO'],
      'DEBUG': Levels['DEBUG'],
      'NOTICE': Levels['NOTICE']
    }
  }
  public get_level_correspond(level: any) {
    let level_muster = this.levels
    // console.log(level_muster)
    // console.log(level)
    const values_list = Object.values(level_muster)
    const keys_list = Object.keys(level_muster)
    const correspond_ed = this.correspond(keys_list, values_list)

    return correspond_ed[String(level)]
  }
  public correspond(keys_list:any[], values_list:any[]) {
    if (keys_list.length != values_list.length) {
      throw (new Error('keys_list and values_list length not equal.'));
    }
    let correspond_aims = {}
    for (let index = 0; index < keys_list.length; index++) {
      correspond_aims[keys_list[index]] = values_list[index]
      correspond_aims[values_list[index]] = keys_list[index]
    }
    return correspond_aims
  }
}
function t1(){
  let logger = new Logger2()
  console.log(logger.get_level_correspond('EMERGENCY'))
}
