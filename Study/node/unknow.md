1. Symbol类型
2. Object.defineProperty(obj, prop, descriptor) 添加/修改属性 返回对象
3. 常用的基础模块 tools

```js
var async = require("async");
var jsdom = require("jsdom");
// var charset = require("charset");
var logger = require("./unit/logger");
var webRes = require("./unit/webRes");
var webReq = require("./unit/webReq");
var httpUnit = require("./unit/httpUnit");
var cache =  require("./unit/cache");

var dataFilter =  require("./unit/dataFilter");
var uuidGet = require("./unit/uuidGet");
var crypto = require("./unit/crypto");
var queryString = require('querystring');
var url = require('url');
var http = require('http');
var socketio= require('socket.io');
var formidable = require('formidable');
var moment = require("./unit/moment");
var qrcode = require('qrcode');
var domain = require("./unit/domain");

var eventTypes = require("./unit/eventTypes");

var userSSDWBMGet = require("./unit/userSSDWBMGet");
var baidu2wgs = require("./unit/baidu2wgs");
var checkCardnumber = require("./unit/checkCardnumber");
var gendocx=require("./unit/office/gendocx");
var html2doc = require("./unit/office/html2doc");
```

