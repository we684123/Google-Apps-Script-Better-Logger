import './t1.ts'


export default class Logger {
  description: string
  sheet_id: string
  sheet_page_name: string
  logfmt: string
  datefmt: string
  level: string


  constructor() {
    this.description =
      '這是一個Logger，用法請看https://github.com/we684123/Google_Apps_Script_Logger'
    this.sheet_id = ''
    this.sheet_page_name = "Log",
      this.logfmt =
      '%{datefmt} %{user} %{levelname} : %{message}',
      this.datefmt = "yyyy.MM.dd G 'at' HH:mm:ss z",
      // 格式設定看這裡
      // https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html
      this.level = 'WARNING'
  }

  public get_config(): string {
    return `
    sheet_id = ${this.sheet_id}
    sheet_page_name = ${this.sheet_page_name}
    logfmt = ${this.logfmt}
    datefmt = ${this.datefmt}
    level = ${this.level}
    `
  }

  public set_config(
    sheet_id: string,
    sheet_page_name: string = "Log",
    logfmt: string =
      '%{datefmt} %{user} %{levelname} : %{message}',
    datefmt: string = "yyyy.MM.dd G 'at' HH:mm:ss z",
    level: string = 'WARNING'
  ): void {
    this.sheet_id = sheet_id
    this.sheet_page_name = sheet_page_name
    this.logfmt = logfmt
    this.datefmt = datefmt
    this.level = level
  }

  public set_sheet_id(
    sheet_id: string,
  ): void {
    this.sheet_id = sheet_id
  }

  public set_sheet_page_name(
    sheet_page_name: string,
  ): void {
    this.sheet_page_name = sheet_page_name
  }

  public set_logfmt(
    logfmt: string,
  ): void {
    this.logfmt = logfmt
  }

  public set_datefmt(
    datefmt: string,
  ): void {
    this.datefmt = datefmt
  }

  public set_level(
    level: string,
  ): void {
    this.level = level
  }

  public log(level_label: string | Number, text: string) {
    const enum Levels {
      CRITICAL = 50,
      ERROR = 40,
      WARNING = 30,
      INFO = 20,
      DEBUG = 10,
      NOTSET = 0
    }

    const handle_level = (level_label: Levels): void => {

      switch (level_label) {
        case Levels.CRITICAL:
          console.error(this.ass_msg('CRITICAL', text));
          break;
        case Levels.ERROR:
          console.error(this.ass_msg('ERROR', text));
          break;
        case Levels.WARNING:
          console.warn(this.ass_msg('WARNING', text));
          break;
        case Levels.INFO:
          console.info(this.ass_msg('INFO', text));
          break;
        case Levels.DEBUG:
          console.info(this.ass_msg('DEBUG', text));
          break;
        case Levels.NOTSET:
          console.info(this.ass_msg('NOTSET', text));
          break;
        default:
          throw (new Error('No have status code!'));
      }
    };

  }
  private ass_msg(levelname: string, message: string) {
    let formattedDate = Utilities.formatDate(
      new Date(), "GMT", this.datefmt
    )
    var user = Session.getActiveUser().getEmail();

    return this.logfmt
      .replace(/%{datefmt}/g, formattedDate)
      .replace(/%{user}/g, user)
      .replace(/%{levelname}/g, levelname)
      .replace(/%{message}/g, message)
  }
}
