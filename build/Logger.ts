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

export default class Logger {
  description: string
  sheet_id: string
  sheet_page_name: string
  logfmt: string
  GMT: string
  datefmt: string
  level_label: string
  level: number
  user: string
  Levels: Levels
  levels: object
  levels_colors: object
  use_sheet: boolean
  use_console: boolean
  sheet_log_slice: boolean

  constructor() {
    this.description =
      '這是一個Logger，用法請看https://github.com/we684123/Google_Apps_Script_Logger'
    this.sheet_id = ''
    this.sheet_page_name = "Log"
    this.logfmt =
      '%{datefmt} - %{user} - %{levelname} : %{message}'
    // 暫時只有這四個
    this.GMT = 'GMT+8'
    this.datefmt = "yyyy.MM.dd HH:mm:ss z"
    // 格式設定看這裡
    // https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html
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
    this.levels_colors = {
      'EMERGENCY': "#ff0000",
      'ALERT': "#980000",
      'CRITICAL': "#e06666",
      'ERROR': "#f6b26b",
      'WARNING': "#ffe599",
      'INFO': "#93c47d",
      'DEBUG': "#76a5af",
      'NOTICE': "#9fc5e8",
    }
    this.level_label = 'WARNING'
    this.level = this.get_level_correspond(this.level_label)
    this.user = Session.getActiveUser().getEmail();
    this.use_sheet = false
    this.use_console = true
    this.sheet_log_slice = true
  }

  public get_config(): string {
    return `
    description = ${this.description}
    sheet_id = ${this.sheet_id}
    sheet_page_name = ${this.sheet_page_name}
    logfmt = ${this.logfmt}
    GMT = ${this.GMT}
    datefmt = ${this.datefmt}
    level = ${this.level}
    level_label = ${this.level_label}
    levels = ${this.levels}
    levels_colors = ${this.levels_colors}
    user = ${this.user}
    use_sheet = ${this.use_sheet}
    use_console = ${this.use_console}
    sheet_log_slice = ${this.sheet_log_slice}
    `
  }

  public set_config(
    sheet_id: string,
    sheet_page_name: string = "Log",
    logfmt: string =
      '%{datefmt} %{user} %{levelname} : %{message}',
    GMT: string,
    datefmt: string = "yyyy.MM.dd G 'at' HH:mm:ss z",
    level: number = 30
  ): void {
    this.sheet_id = sheet_id
    this.sheet_page_name = sheet_page_name
    this.logfmt = logfmt
    this.GMT = GMT
    this.datefmt = datefmt
    this.level = level
    this.level_label = 'WARNING'
    this.level = this.get_level_correspond(this.level_label)
    this.use_sheet = false
    this.use_console = true
    this.sheet_log_slice = true
  }

  public set_sheet_id(sheet_id: string): void {
    this.sheet_id = sheet_id
  }

  public set_sheet_page_name(sheet_page_name: string): void {
    this.sheet_page_name = sheet_page_name
  }

  public set_logfmt(logfmt: string): void {
    this.logfmt = logfmt
  }

  public set_datefmt(datefmt: string): void {
    this.datefmt = datefmt
  }

  public set_GMT(GMT: string): void {
    this.GMT = GMT
  }

  public set_level(level: string): void {
    this.level = this.get_level_correspond(level)
  }

  public set_EMERGENCY_color(color: string): void {
    this.levels['EMERGENCY'] = color
  }
  public set_ALERT_color(color: string): void {
    this.levels['ALERT'] = color
  }
  public set_CRITICAL_color(color: string): void {
    this.levels['CRITICAL'] = color
  }
  public set_ERROR_color(color: string): void {
    this.levels['ERROR'] = color
  }
  public set_WARNING_color(color: string): void {
    this.levels['WARNING'] = color
  }
  public set_INFO_color(color: string): void {
    this.levels['INFO'] = color
  }
  public set_DEBUG_color(color: string): void {
    this.levels['DEBUG'] = color
  }
  public set_NOTICE_color(color: string): void {
    this.levels['NOTICE'] = color
  }


  public set_use_sheet(boolean: boolean) {
    this.use_sheet = boolean
  }

  public set_use_console(boolean: boolean) {
    this.use_console = boolean
  }

  public set_sheet_log_slice(boolean: boolean) {
    this.sheet_log_slice = boolean
  }

  public log(level_label: Levels, text: string) {
    this.do_log(level_label, text)
  }
  public emergency(text: string) {
    this.do_log(Levels.CRITICAL, text)
  }
  public alert(text: string) {
    this.do_log(Levels.ALERT, text)
  }
  public critical(text: string) {
    this.do_log(Levels.CRITICAL, text)
  }
  public error(text: string) {
    this.do_log(Levels.ERROR, text)
  }
  public warning(text: string) {
    this.do_log(Levels.WARNING, text)
  }
  public info(text: string) {
    this.do_log(Levels.DEBUG, text)
  }
  public debug(text: string) {
    this.do_log(Levels.DEBUG, text)
  }
  public notice(text: string) {
    this.do_log(Levels.NOTICE, text)
  }

  private ass_msg(levelname: string, message: string) {
    let formattedDate = this.get_fmtdate()

    return this.logfmt
      .replace(/%{datefmt}/g, formattedDate)
      .replace(/%{user}/g, this.user)
      .replace(/%{levelname}/g, levelname)
      .replace(/%{message}/g, message)
  }

  private get_fmtdate() {
    return Utilities.formatDate(new Date(), this.GMT, this.datefmt)
  }

  private get_level_correspond(level: any) {
    let level_muster = this.levels
    // console.log(level_muster)
    // console.log(level)
    const values_list = Object.values(level_muster)
    const keys_list = Object.keys(level_muster)
    const correspond_ed = this.correspond(keys_list, values_list)

    return correspond_ed[String(level)]
  }
  private correspond(keys_list: any[], values_list: any[]) {
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

  private log_by_sheet(
    sheet_key: string,
    page: string = 'log',
    text_array: string[] = [],
    level_label: string
  ) {
    // console.log(level_label);
    const SpreadSheet = SpreadsheetApp.openById(sheet_key);
    let sheet = SpreadSheet.getSheetByName(page);
    if (sheet == null) {
      sheet = SpreadSheet.insertSheet(page)
      console.log(`creat a page (name = "${page}")`);
    }
    let SheetLastRow = sheet.getLastRow();
    let LastRow_next = Number(SheetLastRow) + 1
    let len_text_array = text_array.length
    let color = this.levels_colors[level_label]

    sheet
      .getRange(LastRow_next, 1, 1, len_text_array)
      .setValues([text_array])
      .setBackground(color)

  }

  private do_log(level: Levels, text: string) {

    let level_label = this.get_level_correspond(level)
    if (Number(level) >= Number(this.level)) {
      if (this.use_console) {
        const handle_level = (level: Levels, text: string): void => {
          // console.log(Levels.CRITICAL, this.level, level_label)
          switch (level) {
            case Levels.EMERGENCY:
              console.error(this.ass_msg(level_label, text));
              break;
            case Levels.ALERT:
              console.error(this.ass_msg(level_label, text));
              break;
            case Levels.CRITICAL:
              console.error(this.ass_msg(level_label, text));
              break;
            case Levels.ERROR:
              console.error(this.ass_msg(level_label, text));
              break;
            case Levels.WARNING:
              console.warn(this.ass_msg(level_label, text));
              break;
            case Levels.INFO:
              console.info(this.ass_msg(level_label, text));
              break;
            case Levels.DEBUG:
              console.info(this.ass_msg(level_label, text));
              break;
            case Levels.NOTICE:
              console.info(this.ass_msg(level_label, text));
              break;
            default:
              throw (new Error('No have status code!'));
          }
        }
        handle_level(level, text)
      }
      if (this.use_sheet) {
        let wt: string[]
        if (this.sheet_log_slice) {
          wt = []
          let regexp = /%{([^\{\}]+)}/gi
          let matches_array = this.logfmt.match(regexp);
          for (let value of matches_array) {
            if (value == "%{datefmt}") {
              wt.push(this.get_fmtdate())
            } else if (value == "%{user}") {
              wt.push(this.user)
            } else if (value == "%{levelname}") {
              wt.push(level_label)
            } else if (value == "%{message}") {
              wt.push(text)
            }
          }
        } else {
          wt = [this.ass_msg(level_label, text)]
        }
        this.log_by_sheet(this.sheet_id, this.sheet_page_name, wt, level_label)
      }
    }
  }
}
