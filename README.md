# Google_Apps_Script_Logger
一個比原生 console.log 好一些的 Logger    
可以用 sheet、Stackdriver Logging 紀錄，還可以用 mail 通知    

A better console.log Logger.    
You can use sheet, Stackdriver Logging records, you can also use mail to notify.    

----

# 如何使用 Getting Started

### 一般使用(General use)
code：
```
function t2() {
  console.log("---------------------");
  var logger = new Logger();
  var levels = logger.levels;
  logger.set_level(logger.levels.NOTICE);
  console.log(logger.get_config());

  // 有2種方式可以log 這是第1種
  // have 2 method , this 1
  logger.log(levels.EMERGENCY, '這是測試 EMERGENCY !!!!!');
  logger.log(levels.ALERT, '這是測試 ALERT !!!!!');
  logger.log(levels.CRITICAL, '這是測試 CRITICAL !!!!!');
  logger.log(levels.ERROR, '這是測試 ERROR !!!!!');
  logger.log(levels.WARNING, '這是測試 WARNING !!!!!');
  logger.log(levels.DEBUG, '這是測試 DEBUG !!!!!');
  logger.log(levels.INFO, '這是測試 INFO !!!!!');
  logger.log(levels.NOTICE, '這是測試 NOTICE !!!!!');

  // 這是第2種
  // this 2
  logger.emergency('這是測試 EMERGENCY =====');
  logger.alert('這是測試 ALERT =====');
  logger.critical('這是測試 CRITICAL =====');
  logger.error('這是測試 ERROR =====');
  logger.warning('這是測試 WARNING =====');
  logger.debug('這是測試 DEBUG =====');
  logger.info('這是測試 INFO =====');
  logger.notice('這是測試 NOTICE =====');
}
```

result：
![https://imgur.com/tVDnqEQ](https://imgur.com/tVDnqEQ.png)

----
### 使用sheet (use sheet)
code：
```
function t1() {
  console.log("---------------------");
  var logger = new Logger();
  var levels = logger.levels;

  // 設定要 log 的 sheet page
  // set need to log sheet page
  logger.set_sheet_id("1lqlqztKroBwDZ--VxoYN9Hh_BuwOzbdbowltI7yf2N4");

  // 啟動 sheet 紀錄   
  // Turn on sheet log
  logger.set_use_sheet(true);

  logger.set_level(levels.NOTICE);
  console.log(logger.get_config());

  logger.emergency('這是測試 EMERGENCY =====');
  logger.alert('這是測試 ALERT =====');
  logger.critical('這是測試 CRITICAL =====');
  logger.error('這是測試 ERROR =====');
  logger.warning('這是測試 WARNING =====');
  logger.debug('這是測試 DEBUG =====');
  logger.info('這是測試 INFO =====');
  logger.notice('這是測試 NOTICE =====');
}
```

result：
![Imgur](https://i.imgur.com/uQRXeZw.png)
![Imgur](https://i.imgur.com/Hwhn9n7.png)

----
### 使用mail通知(use mail notice)
code：
```
function t3() {
  console.log("---------------------");
  var logger = new Logger();
  console.log(logger.get_config());
  logger.set_level(logger.levels.NOTICE);

  // 啟動 mail 通知 (在沒有特別設定的情況下，只有 EMERGENCY、ALERT、NOTICE 3個會通知)
  // Turn on mail notice, if you not change setting, only EMERGENCY、ALERT、NOTICE will notice
  logger.set_use_mail = true;

  // 這裡填寫你的程式名稱 寄信時當作標題用
  // there fill in the name of your program , will use it as the title when sending a mail.
  logger.application = '這裡填你的應用程式名稱';


  logger.emergency('這是測試 EMERGENCY =====');
  logger.alert('這是測試 ALERT =====');
  logger.critical('這是測試 CRITICAL =====');
  logger.error('這是測試 ERROR =====');
  logger.warning('這是測試 WARNING =====');
  logger.debug('這是測試 DEBUG =====');
  logger.info('這是測試 INFO =====');
  logger.notice('這是測試 NOTICE =====');
}
```

result：
![Imgur](https://i.imgur.com/SnRlJGB.png)
![Imgur](https://i.imgur.com/d0PG8qf.png)
![Imgur](https://i.imgur.com/U0FHOPh.png)

----
<!-- <br> -->
# 概觀 Overview

| 功能 Methods | 說明 Explanation|     
|-------|:-----:|   
|set_config|一次設定Logger所有參數。<br>Set Logger all config|
|set_logfmt|設定Logger的時間格式<br>Set Logger time format|
|set_GMT|設定Logger時區，單位GMT<br>Set Logger time zone, unit GMT |
|set_use_console|設定是否啟用 Stackdriver Logging，預設開啟<br>Set whether to enable Stackdriver Logging, the default is on|
|set_use_sheet|設定是否啟用 sheet，預設關閉<br>Set whether to enable sheet, the default is off|
|set_sheet_id|設定要使用的sheet id<br>Set the sheet id|
|set_sheet_page_name|設定要使用的sheet page，預設為 'log'<br>Set the sheet page to use, the default is 'log'|
|set_sheet_log_slice|設定log進sheet時，要不要分欄輸入(A欄、B欄...)<br>When log into the sheet, do you want to enter it in a columns or separate(Column A, Column B...)|
|set_level|設定紀錄的等級<br>Set the record level|
|set_EMERGENCY_color|設定 EMERGENCY 紀錄在 sheet 時的單元格顏色<br>Set the cell color when EMERGENCY is recorded in sheet|
|set_ALERT_color|設定 ALERT 紀錄在 sheet 時的單元格顏色<br>Set the cell color when ALERT is recorded in sheet|
|set_CRITICAL_color|設定 CRITICAL 紀錄在 sheet 時的單元格顏色<br>Set the cell color when CRITICAL is recorded in sheet|
|set_ERROR_color|設定 ERROR 紀錄在 sheet 時的單元格顏色<br>Set the cell color when ERROR is recorded in sheet|
|set_WARNING_color|設定 WARNING 紀錄在 sheet 時的單元格顏色<br>Set the cell color when WARNING is recorded in sheet|
|set_INFO_color|設定 INFO 紀錄在 sheet 時的單元格顏色<br>Set the cell color when INFO is recorded in sheet|
|set_DEBUG_color|設定 DEBUG 紀錄在 sheet 時的單元格顏色<br>Set the cell color when DEBUG is recorded in sheet|
|set_NOTICE_color|設定 NOTICE 紀錄在 sheet 時的單元格顏色<br>Set the cell color when NOTICE is recorded in sheet|
|set_use_mail|設定是否要寄email<br>Set whether to send email|
|set_EMERGENCY_mail|設定遇到log等級 EMERGENCY 時，是否要寄送 mail,預設 true<br>Set whether to send mail when encountering log level EMERGENCY,the default is true|
|set_ALERT_mail|設定遇到log等級 ALERT 時，是否要寄送 mail,預設 true<br>Set whether to send mail when encountering log level ALERT,the default is true|
|set_CRITICAL_mail|設定遇到log等級 CRITICAL 時，是否要寄送 mail,預設 false<br>Set whether to send mail when encountering log level CRITICAL,the default is false|
|set_ERRORmail|設定遇到log等級 ERROR 時，是否要寄送 mail,預設 false<br>Set whether to send mail when encountering log level ERROR,the default is false|
|set_WARNING_mail|設定遇到log等級 WARNING 時，是否要寄送 mail,預設 false<br>Set whether to send mail when encountering log level WARNING,the default is false|
|set_INFO_mail|設定遇到log等級 INFO 時，是否要寄送 mail,預設 false<br>Set whether to send mail when encountering log level INFO,the default is false|
|set_DEBUG_mail|設定遇到log等級 DEBUG 時，是否要寄送 mail,預設 false<br>Set whether to send mail when encountering log level DEBUG,the default is false|
|set_NOTICE_mail|設定遇到log等級 NOTICE 時，是否要寄送 mail,預設 true<br>Set whether to send mail when encountering log level NOTICE,the default is true|
|set_application|設定程式名稱<br>set application name|
|log|紀錄log用<br>For logging|
|emergency|使用 emergency log<br> use emergency log|
|alert|使用 alert log<br> use alert log|
|critical|使用 critical log<br> use critical log|
|error|使用 error log<br> use error log|
|warning|使用 warning log<br> use warning log|
|info|使用 info log<br> use info log|
|debug|使用 debug log<br> use debug log|
|notice|使用 notice log<br> use notice log|

----

# 功能詳細說明 Methods Detailed description

## set_config

```
set_config(sheet_id, sheet_page_name, logfmt, GMT, datefmt, level)
```


### Return
void

### Parameters
|name|type|Description|
|:---:|:---:|:---:|
|sheet_id|string|https://docs.google.com/spreadsheets/d/```1lqlqztKroBwDZ--VxoYN9Hh_BuwOzbdbowltI7yf2N4```/edit 網址中的這一段 **(介於 "d/" 跟 "/edit" 之間)**|
|sheet_page_name|string|使用sheet中的哪個page，預設是'log'|
|[logfmt](#logfmt)|string|logger的log格式|
|[GMT](https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html)|string|GMT時間|
|datefmt|string|logger的log格式中 時間的紀錄方式|
|level|string \| number \| Levels|紀錄的等級，可以接受 'EMERGENCY'、60、logger.levels.NOTICE 這3種方式|

### Explanation

```
function t4() {
  console.log("---------------------");
  var logger = new Logger();
  logger.set_config(
    "xxx123",
    "log_2020/07/13",
    "%{datefmt} %{levelname} : %{message}",
    "GMT+0",
    "yyyy.MM.dd HH:mm:ss",
    'INFO'
  )
  console.log(logger.get_config());
}
```


## set_logfmt
```
set_logfmt(logfmt)
```


### Return
void

### Parameters
|name|type|Description|
|:---:|:---:|:---:|
|[logfmt](#logfmt)|string|logger的log格式|


### Explanation

```
function t4() {
  console.log("---------------------");
  var logger = new Logger();
  logger.set_logfmt("%{datefmt} %{levelname} : %{message}")
  console.log(logger.get_config());
}
```

# 元件說明 Component Description

## logfmt
