declare const enum Levels {
    EMERGENCY = 70,
    ALERT = 60,
    CRITICAL = 50,
    ERROR = 40,
    WARNING = 30,
    INFO = 20,
    DEBUG = 10,
    NOTICE = 0
}
export default class BetterLogger {
    description: string;
    sheet_id: string;
    sheet_page_name: string;
    logfmt: string;
    GMT: string;
    datefmt: string;
    level_label: string;
    level: number;
    user: string;
    Levels: Levels;
    levels: object;
    levels_colors: object;
    use_mail: boolean;
    levels_use_mail: object;
    mail_subject_fmt: string;
    application: string;
    use_sheet: boolean;
    use_console: boolean;
    sheet_log_slice: boolean;
    constructor();
    get_config(): string;
    set_config(sheet_id: string, sheet_page_name: string, logfmt: string, GMT: string, datefmt?: string, level?: number): void;
    set_logfmt(logfmt: string): void;
    set_datefmt(datefmt: string): void;
    set_GMT(GMT: string): void;
    set_use_console(boolean: boolean): void;
    set_use_sheet(boolean: boolean): void;
    set_sheet_id(sheet_id: string): void;
    set_sheet_page_name(sheet_page_name: string): void;
    set_sheet_log_slice(boolean: boolean): void;
    set_level(level: string): void;
    set_EMERGENCY_color(color: string): void;
    set_ALERT_color(color: string): void;
    set_CRITICAL_color(color: string): void;
    set_ERROR_color(color: string): void;
    set_WARNING_color(color: string): void;
    set_INFO_color(color: string): void;
    set_DEBUG_color(color: string): void;
    set_NOTICE_color(color: string): void;
    set_use_mail(yn: boolean): void;
    set_EMERGENCY_mail(yn: boolean): void;
    set_ALERT_mail(yn: boolean): void;
    set_CRITICAL_mail(yn: boolean): void;
    set_ERROR_mail(yn: boolean): void;
    set_WARNING_mail(yn: boolean): void;
    set_INFO_mail(yn: boolean): void;
    set_DEBUG_mail(yn: boolean): void;
    set_NOTICE_mail(yn: boolean): void;
    log(level_label: Levels, text: string): void;
    emergency(text: string): void;
    alert(text: string): void;
    critical(text: string): void;
    error(text: string): void;
    warning(text: string): void;
    info(text: string): void;
    debug(text: string): void;
    notice(text: string): void;
    set_application(application: string): void;
    private ass_msg;
    private ass_subject;
    private get_fmtdate;
    private get_level_correspond;
    private correspond;
    private do_log;
    private log_by_sheet;
}
export {};
