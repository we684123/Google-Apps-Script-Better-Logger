"use strict";
exports.__esModule = true;
exports.BetterLogger = void 0;
var BetterLogger = /** @class */ (function () {
    function BetterLogger() {
        this.description =
            "這是一個Logger，用法請看https://github.com/we684123/Google_Apps_Script_Logger";
        this.sheet_id = "";
        this.sheet_page_name = "Log";
        this.logfmt =
            "%{datefmt} - %{user} - %{levelname} : %{message}";
        // 暫時只有這四個
        this.GMT = "GMT+8";
        this.datefmt = "yyyy.MM.dd HH:mm:ss z";
        // 格式設定看這裡
        // https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html
        this.levels = {
            "EMERGENCY": 70 /* "EMERGENCY" */,
            "ALERT": 60 /* "ALERT" */,
            "CRITICAL": 50 /* "CRITICAL" */,
            "ERROR": 40 /* "ERROR" */,
            "WARNING": 30 /* "WARNING" */,
            "INFO": 20 /* "INFO" */,
            "DEBUG": 10 /* "DEBUG" */,
            "NOTICE": 0 /* "NOTICE" */
        };
        this.levels_colors = {
            "EMERGENCY": "#ff0000",
            "ALERT": "#980000",
            "CRITICAL": "#e06666",
            "ERROR": "#f6b26b",
            "WARNING": "#ffe599",
            "INFO": "#93c47d",
            "DEBUG": "#76a5af",
            "NOTICE": "#9fc5e8"
        };
        this.use_mail = false;
        this.levels_use_mail = {
            "EMERGENCY": true,
            "ALERT": true,
            "CRITICAL": false,
            "ERROR": false,
            "WARNING": false,
            "INFO": false,
            "DEBUG": false,
            "NOTICE": true
        };
        this.mail_subject_fmt = "%{application} %{log_level}";
        // 暫時就這2個
        this.application = "Google_Apps_Script_Logger";
        this.level_label = "WARNING";
        this.level = this.get_level_correspond(this.level_label);
        // ts-ignore
        this.user = Session.getActiveUser().getEmail(); // todo
        this.use_sheet = false;
        this.use_console = true;
        this.sheet_log_slice = true;
    }
    BetterLogger.prototype.get_config = function () {
        return "\n    description = " + this.description + "\n    user = " + this.user + "\n    GMT = " + this.GMT + "\n    logfmt = " + this.logfmt + "\n    datefmt = " + this.datefmt + "\n    level = " + this.level + "\n    level_label = " + this.level_label + "\n    levels = " + JSON.stringify(this.levels) + "\n    use_console = " + this.use_console + "\n    use_sheet = " + this.use_sheet + "\n    sheet_id = " + this.sheet_id + "\n    sheet_page_name = " + this.sheet_page_name + "\n    sheet_log_slice = " + this.sheet_log_slice + "\n    levels_colors = " + JSON.stringify(this.levels_colors) + "\n    use_mail = " + this.use_mail + "\n    levels_use_mail = " + JSON.stringify(this.levels_use_mail) + "\n    mail_subject_fmt = " + this.mail_subject_fmt + "\n    application = " + this.application + "\n    ";
    };
    BetterLogger.prototype.set_config = function (sheet_id, sheet_page_name, logfmt, GMT, datefmt, level) {
        if (sheet_page_name === void 0) { sheet_page_name = "Log"; }
        if (logfmt === void 0) { logfmt = "%{datefmt} %{user} %{levelname} : %{message}"; }
        if (datefmt === void 0) { datefmt = "yyyy.MM.dd G 'at' HH:mm:ss z"; }
        if (level === void 0) { level = 30; }
        this.sheet_id = sheet_id;
        this.sheet_page_name = sheet_page_name;
        this.logfmt = logfmt;
        this.GMT = GMT;
        this.datefmt = datefmt;
        this.level = level;
        this.level_label = "WARNING";
        var rt = this.get_level_correspond(level, 0);
        if (rt == undefined) {
            throw (new Error("level is not allow!"));
        }
        this.level = rt;
        this.use_sheet = false;
        this.use_console = true;
        this.sheet_log_slice = true;
    };
    BetterLogger.prototype.set_logfmt = function (logfmt) {
        this.logfmt = logfmt;
    };
    BetterLogger.prototype.set_datefmt = function (datefmt) {
        this.datefmt = datefmt;
    };
    BetterLogger.prototype.set_GMT = function (GMT) {
        this.GMT = GMT;
    };
    BetterLogger.prototype.set_use_console = function (boolean) {
        this.use_console = boolean;
    };
    BetterLogger.prototype.set_use_sheet = function (boolean) {
        this.use_sheet = boolean;
    };
    BetterLogger.prototype.set_sheet_id = function (sheet_id) {
        this.sheet_id = sheet_id;
    };
    BetterLogger.prototype.set_sheet_page_name = function (sheet_page_name) {
        this.sheet_page_name = sheet_page_name;
    };
    BetterLogger.prototype.set_sheet_log_slice = function (boolean) {
        this.sheet_log_slice = boolean;
    };
    BetterLogger.prototype.set_level = function (level) {
        var rt = this.get_level_correspond(level, 0);
        if (rt == undefined) {
            throw (new Error("level is not allow!"));
        }
        this.level = rt;
    };
    BetterLogger.prototype.set_EMERGENCY_color = function (color) {
        this.levels["EMERGENCY"] = color;
    };
    BetterLogger.prototype.set_ALERT_color = function (color) {
        this.levels["ALERT"] = color;
    };
    BetterLogger.prototype.set_CRITICAL_color = function (color) {
        this.levels["CRITICAL"] = color;
    };
    BetterLogger.prototype.set_ERROR_color = function (color) {
        this.levels["ERROR"] = color;
    };
    BetterLogger.prototype.set_WARNING_color = function (color) {
        this.levels["WARNING"] = color;
    };
    BetterLogger.prototype.set_INFO_color = function (color) {
        this.levels["INFO"] = color;
    };
    BetterLogger.prototype.set_DEBUG_color = function (color) {
        this.levels["DEBUG"] = color;
    };
    BetterLogger.prototype.set_NOTICE_color = function (color) {
        this.levels["NOTICE"] = color;
    };
    BetterLogger.prototype.set_use_mail = function (yn) {
        this.use_mail = yn;
    };
    BetterLogger.prototype.set_EMERGENCY_mail = function (yn) {
        this.levels["EMERGENCY"] = yn;
    };
    BetterLogger.prototype.set_ALERT_mail = function (yn) {
        this.levels["ALERT"] = yn;
    };
    BetterLogger.prototype.set_CRITICAL_mail = function (yn) {
        this.levels["CRITICAL"] = yn;
    };
    BetterLogger.prototype.set_ERROR_mail = function (yn) {
        this.levels["ERROR"] = yn;
    };
    BetterLogger.prototype.set_WARNING_mail = function (yn) {
        this.levels["WARNING"] = yn;
    };
    BetterLogger.prototype.set_INFO_mail = function (yn) {
        this.levels["INFO"] = yn;
    };
    BetterLogger.prototype.set_DEBUG_mail = function (yn) {
        this.levels["DEBUG"] = yn;
    };
    BetterLogger.prototype.set_NOTICE_mail = function (yn) {
        this.levels["NOTICE"] = yn;
    };
    BetterLogger.prototype.log = function (level_label, text) {
        this.do_log(level_label, text);
    };
    BetterLogger.prototype.emergency = function (text) {
        this.do_log(70 /* EMERGENCY */, text);
    };
    BetterLogger.prototype.alert = function (text) {
        this.do_log(60 /* ALERT */, text);
    };
    BetterLogger.prototype.critical = function (text) {
        this.do_log(50 /* CRITICAL */, text);
    };
    BetterLogger.prototype.error = function (text) {
        this.do_log(40 /* ERROR */, text);
    };
    BetterLogger.prototype.warning = function (text) {
        this.do_log(30 /* WARNING */, text);
    };
    BetterLogger.prototype.info = function (text) {
        this.do_log(20 /* INFO */, text);
    };
    BetterLogger.prototype.debug = function (text) {
        this.do_log(10 /* DEBUG */, text);
    };
    BetterLogger.prototype.notice = function (text) {
        this.do_log(0 /* NOTICE */, text);
    };
    BetterLogger.prototype.set_application = function (application) {
        this.application = application;
    };
    BetterLogger.prototype.ass_msg = function (levelname, message) {
        var formattedDate = this.get_fmtdate();
        return this.logfmt
            .replace(/%{datefmt}/g, formattedDate)
            .replace(/%{user}/g, this.user)
            .replace(/%{levelname}/g, levelname)
            .replace(/%{message}/g, message);
    };
    BetterLogger.prototype.ass_subject = function (level_label) {
        return this.mail_subject_fmt
            .replace(/%{application}/g, this.application)
            .replace(/%{log_level}/g, level_label);
    };
    BetterLogger.prototype.get_fmtdate = function () {
        // ts-ignore
        return Utilities.formatDate(new Date(), this.GMT, this.datefmt); // todo
    };
    BetterLogger.prototype.get_level_correspond = function (level, type) {
        var _this = this;
        if (typeof (level) == typeof (type)) {
            return level;
        }
        // ES7 暫時封印
        //const values_list = Object.values(this.levels)
        var values_list = Object.keys(this.levels).map(function (key) { return _this.levels[key]; });
        var keys_list = Object.keys(this.levels);
        var correspond_ed = this.correspond(keys_list, values_list);
        return correspond_ed[String(level)];
    };
    BetterLogger.prototype.correspond = function (keys_list, values_list) {
        if (keys_list.length != values_list.length) {
            throw (new Error("keys_list and values_list length not equal."));
        }
        var correspond_aims = {};
        for (var index = 0; index < keys_list.length; index++) {
            correspond_aims[keys_list[index]] = values_list[index];
            correspond_aims[values_list[index]] = keys_list[index];
        }
        return correspond_aims;
    };
    BetterLogger.prototype.do_log = function (level, text) {
        var _this = this;
        var level_label = this.get_level_correspond(level);
        if (Number(level) >= Number(this.level)) {
            if (this.use_console) {
                var handle_level = function (level, text) {
                    // console.log(Levels.CRITICAL, this.level, level_label)
                    switch (level) {
                        case 70 /* EMERGENCY */:
                            console.error(_this.ass_msg(level_label, text));
                            break;
                        case 60 /* ALERT */:
                            console.error(_this.ass_msg(level_label, text));
                            break;
                        case 50 /* CRITICAL */:
                            console.error(_this.ass_msg(level_label, text));
                            break;
                        case 40 /* ERROR */:
                            console.error(_this.ass_msg(level_label, text));
                            break;
                        case 30 /* WARNING */:
                            console.warn(_this.ass_msg(level_label, text));
                            break;
                        case 20 /* INFO */:
                            console.info(_this.ass_msg(level_label, text));
                            break;
                        case 10 /* DEBUG */:
                            console.info(_this.ass_msg(level_label, text));
                            break;
                        case 0 /* NOTICE */:
                            console.info(_this.ass_msg(level_label, text));
                            break;
                        default:
                            throw (new Error("No have this level!"));
                    }
                };
                handle_level(level, text);
            }
            if (this.use_sheet) {
                var wt = void 0;
                if (this.sheet_log_slice) {
                    wt = [];
                    var regexp = /%{([^\{\}]+)}/gi;
                    var matches_array = this.logfmt.match(regexp);
                    for (var _i = 0, matches_array_1 = matches_array; _i < matches_array_1.length; _i++) {
                        var value = matches_array_1[_i];
                        if (value == "%{datefmt}") {
                            wt.push(this.get_fmtdate());
                        }
                        else if (value == "%{user}") {
                            wt.push(this.user);
                        }
                        else if (value == "%{levelname}") {
                            wt.push(level_label);
                        }
                        else if (value == "%{message}") {
                            wt.push(text);
                        }
                    }
                }
                else {
                    wt = [this.ass_msg(level_label, text)];
                }
                this.log_by_sheet(this.sheet_id, this.sheet_page_name, wt, level_label);
            }
            if (this.use_mail) {
                if (this.levels_use_mail[level_label]) {
                    try {
                        // ts-ignore
                        GmailApp.sendEmail(// todo
                        this.user, this.ass_subject(level_label), this.ass_msg(level_label, text));
                        console.log("send a Email ,\n               " + this.user + ",\n               " + this.ass_subject(level_label) + ",\n               " + this.ass_msg(level_label, text));
                    }
                    catch (error) {
                        console.error(error);
                    }
                }
            }
        }
    };
    BetterLogger.prototype.log_by_sheet = function (// todo
    sheet_key, page, text_array, level_label) {
        if (page === void 0) { page = "log"; }
        if (text_array === void 0) { text_array = []; }
        // console.log(level_label);
        // ts-ignore
        var SpreadSheet = SpreadsheetApp.openById(sheet_key);
        var sheet = SpreadSheet.getSheetByName(page);
        if (sheet == null) {
            sheet = SpreadSheet.insertSheet(page);
            console.log("creat a page (name = \"" + page + "\")");
        }
        var SheetLastRow = sheet.getLastRow();
        var LastRow_next = Number(SheetLastRow) + 1;
        var len_text_array = text_array.length;
        // console.log(this.levels_colors);
        // console.log(`level_label = ${level_label}`);
        var color = this.levels_colors[level_label];
        sheet
            .getRange(LastRow_next, 1, 1, len_text_array)
            .setValues([text_array])
            .setBackground(color);
    };
    return BetterLogger;
}());
exports.BetterLogger = BetterLogger;
//# sourceMappingURL=BetterLogger.js.map