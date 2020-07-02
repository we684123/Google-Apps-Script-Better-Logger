export default class Logger {
  description: string
  sheet_id: string
  sheet_page_name: string
  format: string
  datefmt: string
  level: string


  constructor() {
    this.description =
      '這是一個Logger，用法請看https://github.com/we684123/Google_Apps_Script_Logger'
    this.sheet_id = ''
    this.sheet_page_name = "Log",
      this.format =
      '%{asctime} %{name} %{levelname} %{module}: %{message}',
      this.datefmt = "yyyy.MM.dd G 'at' HH:mm:ss z",
      // 格式設定看這裡
      // https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html
      this.level = 'WARNING'
  }

  public get_config(): string {
    return `
    sheet_id = ${this.sheet_id}
    sheet_page_name = ${this.sheet_page_name}
    format = ${this.format}
    datefmt = ${this.datefmt}
    level = ${this.level}
    `
  }

  public set_config(
    sheet_id: string,
    sheet_page_name: string = "Log",
    format: string =
      '%{asctime} %{name} %{levelname} %{module}: %{message}',
    datefmt: string = "yyyy.MM.dd G 'at' HH:mm:ss z",
    level: string = 'WARNING'
  ): void {
    this.sheet_id = sheet_id
    this.sheet_page_name = sheet_page_name
    this.format = format
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

  public set_format(
    format: string,
  ): void {
    this.format = format
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

  public log(level: string | Number, text: string) {
    const enum Levels {
      CRITICAL = 50,
      ERROR = 40,
      WARNING = 30,
      INFO = 20,
      DEBUG = 10,
      NOTSET = 0
    }

    const handle_level = (action: Levels): void => {
      switch (action) {
        case Levels.CRITICAL:

          break;
        case Levels.ERROR:

          break;
        case Levels.WARNING:

          break;
        case Levels.INFO:

          break;
        case Levels.DEBUG:

          break;
        case Levels.NOTSET:

          break;
        default:
          throw (new Error('No have status code!'));
      }
    };

  }
}
