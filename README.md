## Usage
```javascript
import * as hormone from 'hormone.js';

// Check if it is empty
let value = '' | [] | null | {} | undefined
let checkEmpty = hormone.checkEmpty(value) // true

// Type of inspection
let value = ''
let typeCheck = hormone.typeCheck(value) // String

// Monetary Standardization
let value = '1'
let currency = hormone.currency(value) // 1.00
let currency = hormone.currency(value, '', 0) // 1

// Get the current timestamp 
let timeStamp = hormone.timeStamp() // 1550107943697
// time stamp in seconds
let timeStamp = hormone.timeStamp() // 1550108013

// Time comparison
let date1 = '2019-08-20'
let date2 = '2019-08-19'
let compareDate = hormone.compareDate(date1, date2) // true

// Time conversion
let secToTime = hormone.secToTime(120) // "00:02:00"
let secToTime = hormone.secToTime(120, false) // "02:00"

// Array Solutions in Arrays Form Ordinary Arrays
// let arr = [[1,2], 3, [[4]], ...]
// let arrayStructured = hormone.arrayStructured(arr) // [1, 2, 3, 4, ...]

// IP conversion
let ip = '127.168.1.1'
let analysisIp = hormone.analysisIp('ip2int', ip) // 2141716737
let nu = 2141716737
let analysisIp = hormone.analysisIp('int2iP', nu) // '127.168.1.1'
```
