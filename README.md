# Google Apps Script Better Logger

一個比原生 console.log 好一些的 Logger  
可以用 sheet、Stackdriver Logging 紀錄，還可以用 mail 通知

A Logger which better than built-in console.log .  
You can use sheet, Stackdriver Logging records, you can also use mail to notify.

---

## 目錄 index

-   [如何使用 Getting Started](#如何使用-getting-started)
-   [概觀 Overview](#概觀-Overview)
-   [功能詳細說明 Methods Detailed description](#功能詳細說明-Methods-Detailed-description)
-   [元件說明 Component Description](#元件說明-Component-Description)
-   [待做 TODO](#待做-TODO)

## 如何使用 Getting Started

### 安裝(install)

#### Google Apps Script Library install

打開 gs 編輯頁面  
-> "資源"  
-> "程式庫"  
-> 將 `1R4kOenBr5gSIcxUbCYegM4pStj0JzjXdA2jryW5s9J2Phg_ebaykmEgo` 貼上輸入框  
-> "新增"  
-> 選擇最後版本(記得阿 不然儲存不了)  
-> "儲存"~

Open Script Editor.  
-> Resource  
-> Library  
-> Paste Script ID `1R4kOenBr5gSIcxUbCYegM4pStj0JzjXdA2jryW5s9J2Phg_ebaykmEgo` to box  
-> Add library  
-> select lastest version and save

#### npm install

```allowEmpty
npm i google-apps-script-better-logger
```

⚠️npm 安裝僅提供輸入提示，並無法在 local 端執行！⚠️  
⚠️npm install only support IDE input prompt, can't run code on local!⚠️

![Imgur](https://imgur.com/o1MOYm1.png)

### 一般使用(General use)

code：

```javascript
function t2() {
  console.log("---------------------");
  var logger = new BetterLogger.BetterLogger();
  var levels = logger.levels;
  logger.set_level(logger.levels.NOTICE);
  console.log(logger.get_config());

  // 有2種方式可以log 這是第1種
  // have 2 method , this 1
  logger.log(levels.EMERGENCY, "這是測試 EMERGENCY !!!!!");
  logger.log(levels.ALERT, "這是測試 ALERT !!!!!");
  logger.log(levels.CRITICAL, "這是測試 CRITICAL !!!!!");
  logger.log(levels.ERROR, "這是測試 ERROR !!!!!");
  logger.log(levels.WARNING, "這是測試 WARNING !!!!!");
  logger.log(levels.INFO, "這是測試 INFO !!!!!");
  logger.log(levels.DEBUG, "這是測試 DEBUG !!!!!");
  logger.log(levels.NOTICE, "這是測試 NOTICE !!!!!");

  // 這是第2種
  // this 2
  logger.emergency("這是測試 EMERGENCY =====");
  logger.alert("這是測試 ALERT =====");
  logger.critical("這是測試 CRITICAL =====");
  logger.error("這是測試 ERROR =====");
  logger.warning("這是測試 WARNING =====");
  logger.info("這是測試 INFO =====");
  logger.debug("這是測試 DEBUG =====");
  logger.notice("這是測試 NOTICE =====");
}
```

result：
![https://imgur.com/l3V7qHL](https://imgur.com/l3V7qHL.png)

---

### 使用 sheet (use sheet)

code：

```javascript
function t1() {
  console.log("---------------------");
  var logger = new BetterLogger.BetterLogger();
  var levels = logger.levels;

  // 設定要 log 的 sheet page
  // set need to log sheet page
  logger.set_sheet_id("1lqlqztKroBwDZ--VxoYN9Hh_BuwOzbdbowltI7yf2N4");

  // 啟動 sheet 紀錄
  // Turn on sheet log
  logger.set_use_sheet(true);

  logger.set_level(levels.NOTICE);
  console.log(logger.get_config());

  logger.emergency("這是測試 EMERGENCY =====");
  logger.alert("這是測試 ALERT =====");
  logger.critical("這是測試 CRITICAL =====");
  logger.error("這是測試 ERROR =====");
  logger.warning("這是測試 WARNING =====");
  logger.info("這是測試 INFO =====");
  logger.debug("這是測試 DEBUG =====");
  logger.notice("這是測試 NOTICE =====");
}
```

result：
![https://imgur.com/6rNuqW2](https://imgur.com/6rNuqW2.png)
![https://imgur.com/YCZDDJm](https://imgur.com/YCZDDJm.png)

---

### 使用 mail 通知(use mail notice)

code：

```javascript
function t3() {
  console.log("---------------------");
  var logger = new BetterLogger.BetterLogger();
  console.log(logger.get_config());
  logger.set_level(logger.levels.NOTICE);

  // 啟動 mail 通知 (在沒有特別設定的情況下，只有 EMERGENCY、ALERT、NOTICE 3個會通知)
  // Turn on mail notice, if you not change setting, only EMERGENCY、ALERT、NOTICE will notice
  logger.set_use_mail(true);

  // 這裡填寫你的程式名稱 寄信時當作標題用
  // there fill in the name of your program , will use it as the title when sending a mail.
  logger.application = "這裡填你的應用程式名稱";

  logger.emergency("這是測試 EMERGENCY =====");
  logger.alert("這是測試 ALERT =====");
  logger.critical("這是測試 CRITICAL =====");
  logger.error("這是測試 ERROR =====");
  logger.warning("這是測試 WARNING =====");
  logger.info("這是測試 INFO =====");
  logger.debug("這是測試 DEBUG =====");
  logger.notice("這是測試 NOTICE =====");
}
```

result：
![https://imgur.com/zsrH8Ld](https://imgur.com/zsrH8Ld.png)
![https://imgur.com/qvmNsfn](https://imgur.com/qvmNsfn.png)
![https://imgur.com/BdHb7ng](https://imgur.com/BdHb7ng.png)

---

<!-- <br> -->

## 概觀 Overview

| 功能 Methods                                |                                                                    說明 Explanation                                                                     |
| ------------------------------------------- | :-----------------------------------------------------------------------------------------------------------------------------------------------------: |
| [set_config](#set_config)                   |                                                   一次設定 Logger 所有參數。<br>Set Logger all config                                                   |
| [set_logfmt](#set_logfmt)                   |                                                    設定 Logger 的時間格式<br>Set Logger time format                                                     |
| [set_GMT](#set_GMT)                         |                                              設定 Logger 時區，單位 GMT<br>Set Logger time zone, unit GMT                                               |
| [set_use_console](#set_use_console)         |                       設定是否啟用 Stackdriver Logging，預設開啟<br>Set whether to enable Stackdriver Logging, the default is on                        |
| [set_use_sheet](#set_use_sheet)             |                                     設定是否啟用 sheet，預設關閉<br>Set whether to enable sheet, the default is off                                     |
| [set_sheet_id](#set_sheet_id)               |                                                        設定要使用的 sheet id<br>Set the sheet id                                                        |
| [set_sheet_page_name](#set_sheet_page_name) |                                設定要使用的 sheet page，預設為 'log'<br>Set the sheet page to use, the default is 'log'                                 |
| [set_sheet_log_slice](#set_sheet_log_slice) | 設定 log 進 sheet 時，要不要分欄輸入(A 欄、B 欄...)<br>When log into the sheet, do you want to enter it in a columns or separate(Column A, Column B...) |
| [set_level](#set_level)                     |                                                         設定紀錄的等級<br>Set the record level                                                          |
| [set_EMERGENCY_color](#set_XXX_color)       |                          設定 EMERGENCY 紀錄在 sheet 時的單元格顏色<br>Set the cell color when EMERGENCY is recorded in sheet                           |
| [set_ALERT_color](#set_XXX_color)           |                              設定 ALERT 紀錄在 sheet 時的單元格顏色<br>Set the cell color when ALERT is recorded in sheet                               |
| [set_CRITICAL_color](#set_XXX_color)        |                           設定 CRITICAL 紀錄在 sheet 時的單元格顏色<br>Set the cell color when CRITICAL is recorded in sheet                            |
| [set_ERROR_color](#set_XXX_color)           |                              設定 ERROR 紀錄在 sheet 時的單元格顏色<br>Set the cell color when ERROR is recorded in sheet                               |
| [set_WARNING_color](#set_XXX_color)         |                            設定 WARNING 紀錄在 sheet 時的單元格顏色<br>Set the cell color when WARNING is recorded in sheet                             |
| [set_INFO_color](#set_XXX_color)            |                               設定 INFO 紀錄在 sheet 時的單元格顏色<br>Set the cell color when INFO is recorded in sheet                                |
| [set_DEBUG_color](#set_XXX_color)           |                              設定 DEBUG 紀錄在 sheet 時的單元格顏色<br>Set the cell color when DEBUG is recorded in sheet                               |
| [set_NOTICE_color](#set_XXX_color)          |                             設定 NOTICE 紀錄在 sheet 時的單元格顏色<br>Set the cell color when NOTICE is recorded in sheet                              |
| [set_use_mail](#set_use_mail)               |                                                     設定是否要寄 email<br>Set whether to send email                                                     |
| [set_EMERGENCY_mail](#set_XXX_mail)         |     設定遇到 log 等級 EMERGENCY 時，是否要寄送 mail,預設 true<br>Set whether to send mail when encountering log level EMERGENCY,the default is true     |
| [set_ALERT_mail](#set_XXX_mail)             |         設定遇到 log 等級 ALERT 時，是否要寄送 mail,預設 true<br>Set whether to send mail when encountering log level ALERT,the default is true         |
| [set_CRITICAL_mail](#set_XXX_mail)          |     設定遇到 log 等級 CRITICAL 時，是否要寄送 mail,預設 false<br>Set whether to send mail when encountering log level CRITICAL,the default is false     |
| [set_ERROR_mail](#set_XXX_mail)             |        設定遇到 log 等級 ERROR 時，是否要寄送 mail,預設 false<br>Set whether to send mail when encountering log level ERROR,the default is false        |
| [set_WARNING_mail](#set_XXX_mail)           |      設定遇到 log 等級 WARNING 時，是否要寄送 mail,預設 false<br>Set whether to send mail when encountering log level WARNING,the default is false      |
| [set_INFO_mail](#set_XXX_mail)              |         設定遇到 log 等級 INFO 時，是否要寄送 mail,預設 false<br>Set whether to send mail when encountering log level INFO,the default is false         |
| [set_DEBUG_mail](#set_XXX_mail)             |        設定遇到 log 等級 DEBUG 時，是否要寄送 mail,預設 false<br>Set whether to send mail when encountering log level DEBUG,the default is false        |
| [set_NOTICE_mail](#set_XXX_mail)            |        設定遇到 log 等級 NOTICE 時，是否要寄送 mail,預設 true<br>Set whether to send mail when encountering log level NOTICE,the default is true        |
| [set_application](#set_applicationF)        |                                                          設定程式名稱<br>set application name                                                           |
| log                                         |                                                               紀錄 log 用<br>For logging                                                                |
| emergency                                   |                                                        使用 emergency log<br> use emergency log                                                         |
| alert                                       |                                                            使用 alert log<br> use alert log                                                             |
| critical                                    |                                                         使用 critical log<br> use critical log                                                          |
| error                                       |                                                            使用 error log<br> use error log                                                             |
| warning                                     |                                                          使用 warning log<br> use warning log                                                           |
| info                                        |                                                             使用 info log<br> use info log                                                              |
| debug                                       |                                                            使用 debug log<br> use debug log                                                             |
| notice                                      |                                                           使用 notice log<br> use notice log                                                            |

---

## 功能詳細說明 Function Description

### set_config

設定 Logger。

```javascript
set_config(sheet_id, sheet_page_name, logfmt, GMT, datefmt, level);
```

#### Return

void

#### Parameters

|                                       name                                       |            type            |                                                                  Description                                                                  |
| :------------------------------------------------------------------------------: | :------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: |
|                                     sheet_id                                     |           string           | <https://docs.google.com/spreadsheets/d/> `1lqlqztKroBwDZ--VxoYN9Hh_BuwOzbdbowltI7yf2N4` /edit 網址中的這一段 **(介於 "d/" 跟 "/edit" 之間)** |
|                                 sheet_page_name                                  |           string           |                                                     使用 sheet 中的哪個 page，預設是'log'                                                     |
|                                [logfmt](#logfmt)                                 |           string           |                                                              logger 的 log 格式                                                               |
| [GMT](https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html) |           string           |                                                                   GMT 時間                                                                    |
|                               [datefmt](#datefmt)                                |           string           |                                                      logger 的 log 格式中 時間的紀錄方式                                                      |
|                                      level                                       | string \| number \| Levels |                                    紀錄的等級，可以接受 'EMERGENCY'、60、logger.levels.NOTICE 這 3 種方式                                     |

#### Explanation

```javascript
function t4() {
  var logger = new BetterLogger.BetterLogger();
  logger.set_config(
    "xxx123",
    "log_2020/07/13",
    "%{datefmt} %{levelname} : %{message}",
    "GMT+0",
    "yyyy.MM.dd HH:mm:ss",
    "INFO"
  );
  console.log(logger.get_config());
}
```

### set_logfmt

設定 log 格式。

```javascript
set_logfmt(logfmt);
```

#### Return

void

#### Parameters

|       name        |  type  |    Description     |
| :---------------: | :----: | :----------------: |
| [logfmt](#logfmt) | string | logger 的 log 格式 |

#### Explanation

```javascript
function t4() {
  var logger = new BetterLogger.BetterLogger();
  logger.set_logfmt("%{datefmt} %{levelname} : %{message}");
  console.log(logger.get_config());
}
```

### set_GMT

設定 Logger [GMT](https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html) 時區。

```javascript
set_GMT(GMT);
```

#### Return

void

#### Parameters

|                                       name                                       |  type  | Description |
| :------------------------------------------------------------------------------: | :----: | :---------: |
| [GMT](https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html) | string |  GMT 時區   |

#### Explanation

```javascript
function t4() {
  var logger = new BetterLogger.BetterLogger();
  logger.set_GMT("GTM+8");
  console.log(logger.get_config());
}
```

### set_use_console

用來開關 Stackdriver Logging，預設 true。

```javascript
set_use_console(boolean);
```

#### Return

void

#### Parameters

|  name   |  type   |  Description  |
| :-----: | :-----: | :-----------: |
| boolean | boolean | true or false |

#### Explanation

```javascript
function t4() {
  var logger = new BetterLogger.BetterLogger();
  logger.set_use_console(false);
  console.log(logger.get_config());
}
```

### set_use_sheet

用來開關 sheet log，預設 false。

```javascript
set_use_sheet(boolean);
```

#### Return

void

#### Parameters

|  name   |  type   |  Description  |
| :-----: | :-----: | :-----------: |
| boolean | boolean | true or false |

#### Explanation

```javascript
function t4() {
  var logger = new BetterLogger.BetterLogger();
  logger.set_use_sheet(true);
  console.log(logger.get_config());
}
```

### set_sheet_id

用來設定 sheet id。

```javascript
set_sheet_id(id);
```

#### Return

void

#### Parameters

| name |  type  |                                                                  Description                                                                  |
| :--: | :----: | :-------------------------------------------------------------------------------------------------------------------------------------------: |
|  id  | string | <https://docs.google.com/spreadsheets/d/> `1lqlqztKroBwDZ--VxoYN9Hh_BuwOzbdbowltI7yf2N4` /edit 網址中的這一段 **(介於 "d/" 跟 "/edit" 之間)** |

#### Explanation

```javascript
function t4() {
  var logger = new BetterLogger.BetterLogger();
  logger.set_sheet_id("1lqlqztKroBwDZ--VxoYN9Hh_BuwOzbdbowltI7yf2N4");
  console.log(logger.get_config());
}
```

### set_sheet_page_name

用來設定 sheet page name。  
如果沒有在 sheet 中發現指定的 page 名稱，則會自己新增一個。

```javascript
set_sheet_page_name(page_name);
```

#### Return

void

#### Parameters

|   name    |  type  |              Description              |
| :-------: | :----: | :-----------------------------------: |
| page_name | string | 使用 sheet 中的哪個 page，預設是'log' |

#### Explanation

```javascript
function t4() {
  var logger = new BetterLogger.BetterLogger();
  logger.set_sheet_page_name("log_2020/07/13");
  console.log(logger.get_config());
}
```

### set_sheet_log_slice

設定 log 進 sheet 時，要不要分欄輸入(A 欄、B 欄...)  
如果是 false 就只輸出 1 欄。

```javascript
set_sheet_log_slice(boolean);
```

#### Return

void

#### Parameters

|  name   |  type   |                     Description                     |
| :-----: | :-----: | :-------------------------------------------------: |
| boolean | boolean | 設定 log 進 sheet 時，要不要分欄輸入(A 欄、B 欄...) |

#### Explanation

```javascript
function t4() {
  var logger = new BetterLogger.BetterLogger();
  logger.set_sheet_log_slice(true);
  console.log(logger.get_config());
}
```

### set_level

設定 log level。

```javascript
set_level(level);
```

#### Return

void

#### Parameters

| name  |                 type                  |                              Description                               |
| :---: | :-----------------------------------: | :--------------------------------------------------------------------: |
| level | string \| number \| [Levels](#Levels) | 紀錄的等級，可以接受 'EMERGENCY'、60、logger.levels.NOTICE 這 3 種方式 |

#### Explanation

```javascript
function t4() {
  var logger = new BetterLogger.BetterLogger();
  logger.set_level("WARNING");
  console.log(logger.get_config());
}
```

### set_XXX_color

設定 XXX 在 sheet log 時的顏色。

```javascript
set_XXX_color(color);
```

#### Return

void

#### Parameters

| name  |  type  |                                      Description                                       |
| :---: | :----: | :------------------------------------------------------------------------------------: |
| color | string | [十六進位字串顏色](https://zh.wikipedia.org/wiki/%E7%BD%91%E9%A1%B5%E9%A2%9C%E8%89%B2) |

#### Explanation

```javascript
function t4() {
  var logger = new BetterLogger.BetterLogger();
  logger.set_ALERT_color("#ffff00");
  logger.set_level(50);
  logger.alert("顏色 == #ffff00");
}
```

### set_use_mail

設定是否在 log 時寄送 eamil。  
預設是 false .

```javascript
set_use_mail(boolean);
```

#### Return

void

#### Parameters

|  name   |  type   |  Description  |
| :-----: | :-----: | :-----------: |
| boolean | boolean | true of false |

#### Explanation

```javascript
function t4() {
  var logger = new BetterLogger.BetterLogger();
  logger.set_use_mail(true);
  logger.alert("寄送 Email!");
}
```

### set_XXX_mail

設定指定 log level 是否寄送 Email。
如果未指定，則只有 EMERGENCY、ALERT、NOTICE 這三個會寄送。詳見[Levels](#Levels)

```javascript
set_XXX_mail(boolean);
```

#### Return

void

#### Parameters

|  name   |  type   |  Description  |
| :-----: | :-----: | :-----------: |
| boolean | boolean | true of false |

#### Explanation

```javascript
function t4() {
  var logger = new BetterLogger.BetterLogger();
  logger.set_ERROR_mail(true);
  logger.error("寄送 email!");
}
```

### set_application

設定指定寄送 Email 時，標題的名稱。
預設 "Google_Apps_Script_Logger"。

```javascript
set_application(subject);
```

#### Return

void

#### Parameters

|  name   |  type  |   Description    |
| :-----: | :----: | :--------------: |
| subject | string | 寄信時的標題名稱 |

#### Explanation

```javascript
function t4() {
  var logger = new BetterLogger.BetterLogger();
  logger.set_application("minecraft");
  logger.notice("伺服器重啟成功！");
}
```

---

## 元件說明 Component Description

### logfmt

logfmt 預設是 "%{datefmt} - %{user} - %{levelname} : %{message}"

#### 種類

|   名稱    |                       說明                       |
| :-------: | :----------------------------------------------: |
|  datefmt  |  是時間格式化後的字串，詳見[datefmt](#datefmt)   |
|   user    | 為使用這個 Logger 的 google 帳號 (xxx@gmail.com) |
| levelname |       是 log 的等級，詳見[levels](#levels)       |
|  message  |               是你想記錄的訊息文字               |

### datefmt

datefmt 預設是 "yyyy.MM.dd HH:mm:ss z"
詳細請看 [SimpleDateFormat](https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html)

### Levels

|   名稱    | 等級 | 說明 | 預設是否寄 email |
| :-------: | :--: | :--: | :--------------: |
| EMERGENCY |  70  | 緊急 |        ✓         |
|   ALERT   |  60  | 快訊 |        ✓         |
| CRITICAL  |  50  | 重要 |        ✖         |
|   ERROR   |  40  | 錯誤 |        ✖         |
|  WARNING  |  30  | 警告 |        ✖         |
|   INFO    |  20  | 資訊 |        ✖         |
|   DEBUG   |  10  | 除錯 |        ✖         |
|  NOTICE   |  0   | 通知 |        ✓         |

---

## 待做 TODO

-   將 log level 完整對應到 Stackdriver Logging 上，不再用其他代替
-   考慮做 file 版記錄方式
-   sheet log 是否要做分天、月 log?
