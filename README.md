
## 一个简单而实用的js工具库
### 安装

`$ npm install hormone.js@latest --save`

## Usage
```javascript
import * as hormone from 'hormone.js';

// 检测是否为空
let value = '' | [] | null | {} | undefined
hormone.checkEmpty(value) // true

// 获取类型值
let value = ''
hormone.typeCheck(value) // String

// 转换
let value = '1'
hormone.currency(value) // 1.00
hormone.currency(value, '', 0) // 1

// 时间戳已毫秒的形式
hormone.timeStamp(false) // 1550107943697
// 时间戳已秒的形式
hormone.timeStamp() // 1550108013

// 日期对比
let date1 = '2019-08-20'
let date2 = '2019-08-19'
hormone.compareDate(date1, date2) // true

// 时长格式化
hormone.secToTime(120) // "00:02:00"
hormone.secToTime(120, false) // "02:00"

// IP 转换
let ip = '127.168.1.1'
hormone.analysisIp('ip2int', ip) // 2141716737
let nu = 2141716737
hormone.analysisIp('int2iP', nu) // '127.168.1.1'

// 获取对象的键和值
let obj = {a: 1, b: 2, c: 3};
hormone.entries(obj) // [[a, 1], [b, 2], [c, 3]]

// 获取对象的键
let obj = {a: 1, b: 2, c: 3};
hormone.keys(obj) // [a, b, c]

// 获取对象的值
let obj = {a: 1, b: 2, c: 3};
hormone.keys(obj) // [1, 2, c]

// 改变数组元素
let arr = [1, 2, 3];
hormone.fill(arr, 'A') // ['A', 'A', 'A'] 
hormone.fill(arr, 'B', 1) // [1, 'B', 'B']
hormone.fill(arr, 'C', 1, 2) // [1, 'C', 3]

// 类型判断
hormone.judge.isArray([1, 2, 3]) // true
hormone.judge.isObject({a: 1, b: 2}) // true
hormone.judge.isString('123') // true
hormone.judge.isNumber(520) // true
hormone.judge.isFunction(function(){}) // true
hormone.judge.isSymbol(Symbol('leeSong')) // true
hormone.judge.isNull(null) // true
hormone.judge.isUndefined(undefined) // true
hormone.judge.isBoolean(false) // true
hormone.judge.isDate(new Date()) // true

// 获取数组最大值
let arr = [11, 22, 66];
hormone.max(arr) // 66

// 获取数组最小值
let arr = [11, 22, 66];
hormone.min(arr) // 11

// 取随两数之间的随机数
hormone.random(1, 3) // 1 or 2 or 3

// 多维数组降维
let arr = [1, [2], [3, [4, 5, ...]]];
hormone.reduction(arr) // [1, 2, 3, 4, 5, ...]

// 数组去掉杂质
let arr = [1, false, null, undefined, '', {}, [], 2];
hormone.routine(arr) // [1, 2]

// 数组去重
let arr = [1, 1, 2, 2, 3, 3];
hormone.uniq(arr) // [1, 2, 3]

// 两日期差值
let d1 = '2019-06-16', d2 = '2019-06-18';
hormone.dateDiff(d1, d2) // 2 此为天数
hormone.dateDiff(d1, d2, true) // 2880 此为分钟数

// 根据日期差返回该时间段的数组
let d1 = '2019-06-16', d2 = '2019-06-18';
hormone.dateDiffArr(d1, d2) // ['2019-06-16', '2019-06-17', '2019-06-18']

// 日期时间格式化
let d = '2019/6/16'
hormone.dateFormat(d, 'YYYY-MM-DD') // 2019-06-16
hormone.dateFormat(new Date, 'YYYY-MM-DD hh:mm:ss') // 2019-06-16 12:30:30

// 日期运算（加 or 减）
let d = '2019-06-15';
hormone.dateOperation('Y', 1, d, false) // 2018-06-15
hormone.dateOperation('Y', 1, d, true) // 2020-06-15
hormone.dateOperation('M', 1, d, false) // 2019-05-15
hormone.dateOperation('M', 1, d, true) // 2019-07-15
...

// 

```
