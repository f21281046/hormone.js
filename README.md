
## 一个简单而实用的js工具库
### 安装

`$ npm install hormone.js@latest --save`

### 开始
`import * as hormone from 'hormone.js';`

#### 数组
```javascript

// 数组分块
hormone.chunk([1, 2, 3, 4, 5], 2); // [[1,2],[3,4],[5]]

// 过滤掉数组中所有假值元素(数组去掉杂质)
hormone.compact([0, 1, false, 2, '', 3, 'e' * 23, NaN, 4, undefined]); // [ 1, 2, 3, 4 ]
hormone.routine([1, false, null, undefined, '', {}, [], 2]); // [1, 2]

// 计数数组中某个值的出现次数
hormone.countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3

// 深度平铺数组(多维数组降维)
hormone.deepFlatten([1, [2], [[3], 4], 5]); // [ 1, 2, 3, 4, 5 ]
hormone.reduction([1, [2], [3, [4, 5, ...]]]); // [1, 2, 3, 4, 5, ...]

// 数组比较(返回两个数组之间的差异)
hormone.difference([1, 2, 3], [1, 2, 4]); // [3]

// 通过比较函数比较两个数组的差异
hormone.differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); // [1, 1.2]

// 数组去重
hormone.distinctValuesOfArray([1, 2, 2, 3, 4, 4, 5]); // [1,2,3,4,5]
hormone.uniq([1, 2, 2, 3, 4, 4, 5]); // [1,2,3,4,5]

// 删除数组中的元素
hormone.dropElements([1, 2, 3, 4], n => n >= 3); // [3,4]

// 从右开始删除数组元素
hormone.dropRight([1, 2, 3]); // [1,2]
hormone.dropRight([1, 2, 3], 2); // [1]
hormone.dropRight([1, 2, 3], 42); // []

// 过滤掉数组中的非唯一值
hormone.filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1,3,5]

// 获得数组中的每个第 n 个元素
hormone.everyNth([1, 2, 3, 4, 5, 6], 2); // [ 2, 4, 6 ]

// 将数组平铺到指定的深度
hormone.flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
hormone.flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]

// 从数组的最后一个元素开始遍历数组
hormone.forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'

// 返回指定元素的所有索引
hormone.indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
hormone.indexOfAll([1, 2, 3], 4); // []

// 排除数组中最后一个元素
hormone.initial([1, 2, 3]); // [1,2]

// 初始化一个二维数组
hormone.initialize2DArray(2, 2, 1); // [[1,1], [1,1]]

// 初始化特定范围的数字数组
hormone.initializeArrayWithRange(5); // [0,1,2,3,4,5]
hormone.initializeArrayWithRange(7, 3); // [3,4,5,6,7]
hormone.initializeArrayWithRange(9, 0, 2); // [0,2,4,6,8]

// 初始化特定范围和值的数组
hormone.initializeArrayWithValues(5, 2); // [2,2,2,2,2]

// 是否为排序数组(如果数组按升序排序，则返回 1 ;如果按降序排列则返回-1 ;如果未排序则返回0)
hormone.isSorted([0, 1, 2, 2]); // 1
hormone.isSorted([4, 3, 2]); // -1
hormone.isSorted([4, 3, 5]); // 0

// 将数组的所有元素拼接成一个字符串
hormone.join(['a', 'b', 'c', 'd'], ',', '&'); // "a,b,c&d"
hormone.join(['a', 'b', 'c', 'd'], ','); // "a,b,c,d"
hormone.join(['a', 'b', 'c', 'd']); // "a,b,c,d"

// 获取数组的最后一个元素
hormone.last([1, 2, 3]); // 3

// 获取任何数量的可迭代对象或具有 length 属性的对象，并返回最长的一个
hormone.longestItem('this', 'is', 'a', 'testcase'); // 'testcase'
hormone.longestItem(...['a', 'ab', 'abc']); // 'abc'
hormone.longestItem(...['a', 'ab', 'abc'], 'abcd'); // 'abcd'
hormone.longestItem([1, 2, 3], [1, 2], [1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]
hormone.longestItem([1, 2, 3], 'foobar'); // 'foobar'

// 将数组的值映射到对象(使用一个函数将数组的值映射到对象，其键值对中，原始值作为键，映射值作为值)
const squareIt = arr => hormone.mapObject(arr, a => a * a);
squareIt([1, 2, 3]); // { 1: 1, 2: 4, 3: 9 }

// 返回数组中N个最大元素
hormone.maxN([1, 2, 3]); // [3]
hormone.maxN([1, 2, 3], 2); // [3,2]

// 返回数组中N个最小元素
hormone.minN([1, 2, 3]); // [1]
hormone.minN([1, 2, 3], 2); // [1,2]

// 获取数组最大值
hormone.max([11, 22, 66]); // 66

// 获取数组最小值
hormone.min([11, 22, 66]); // 11

// 获取数组的第N个元素
hormone.nthElement(['a', 'b', 'c'], 1); // 'b'
hormone.nthElement(['a', 'b', 'b'], -3); // 'a'

// 数组元素分组(根据所提供的函数对每个元素进行迭代，将这些元素分成两个数组)
const users = [{ user: 'barney', age: 36, active: false }, { user: 'fred', age: 40, active: true }];
hormone.partition(users, o => o.active); // [[{ 'user': 'fred', 'age': 40, 'active': true }],[{ 'user': 'barney', 'age': 36, 'active': false }]];

// 从对象中提取出与给定键对应的键值对
hormone.pick({ a: 1, b: '2', c: 3 }, ['a', 'c']); // { 'a': 1, 'c': 3 }

// 删除数组中指定的值(改变原始数组，过滤掉指定的值)
let myArray = ['a', 'b', 'c', 'a', 'b', 'c'];
hormone.pull(myArray, 'a', 'c'); // myArray = [ 'b', 'b' ]

// 删除数组中指定索引的值(改变原始数组，过滤掉指定索引的值)
let myArray = ['a', 'b', 'c', 'd'];
let pulled = hormone.pullAtIndex(myArray, [1, 3]); // myArray = [ 'a', 'c' ] , pulled = [ 'b', 'd' ];

// 删除数组中指定的值，返回删除的元素
let myArray = ['a', 'b', 'c', 'd'];
let pulled = hormone.pullAtValue(myArray, ['b', 'd']); // myArray = [ 'a', 'c' ] , pulled = [ 'b', 'd' ]

// 过滤对象数组(根据条件过滤一个对象数组，同时过滤掉未指定的键（key）)
const data = [{ id: 1, name: 'john', age: 24 }, { id: 2, name: 'mike', age: 50 }];
hormone.reducedFilter(data, ['id', 'name'], item => item.age > 24); // [{ id: 2, name: 'mike'}]

// 移除数组中的元素
hormone.remove([1, 2, 3, 4], n => n % 2 == 0); // [2, 4]

// 数组取样，随机获取数组中的一个元素
hormone.sample([3, 7, 9, 11]); // 9

// 从数组中随机获取 n 个元素
hormone.sampleSize([1, 2, 3], 2); // [3,1]
hormone.sampleSize([1, 2, 3], 4); // [2,3,1]

// 随机排列数组
const foo = [1, 2, 3];
hormone.shuffle(foo); // [2,3,1], foo = [1,2,3]

// 获取数组交集
hormone.similarity([1, 2, 3], [1, 2, 4]); // [1, 2]
hormone.intersection([1, 2, 3], [4, 3, 2]); // [2,3]

// 数组差集
hormone.symmetricDifference([1, 2, 3], [1, 2, 4]); // [3,4]

// 数组合集
hormone.union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]

// 指定值应插入到数组中的最低索引位置
hormone.sortedIndex([5, 3, 2, 1], 4); // 1
hormone.sortedIndex([30, 50], 40); // 1

// 返回剔除第一个元素后的数组
hormone.tail([1, 2, 3]); // [2,3]
hormone.tail([1]); // [1]

// 数组切片，返回前N个元素的数组
hormone.take([1, 2, 3], 5); // [1, 2, 3]
hormone.take([1, 2, 3], 0); // []

// 数组切片，返回后N个元素的数组(从 arr 数组的最后一个元素开始向前提取n个元素)
hormone.takeRight([1, 2, 3], 2); // [ 2, 3 ]
hormone.takeRight([1, 2, 3]); // [3]

// 从数组中排除给定值
hormone.without([2, 1, 2, 3], 1, 2); // [3]

// 创建一个分组元素数组
hormone.zip(['a', 'b'], [1, 2], [true, false]); // [['a', 1, true], ['b', 2, false]]
hormone.zip(['a'], [1, 2], [true, false]); // [['a', 1, true], [undefined, 2, false]]

// 创建一个属性关联到值的对象
hormone.zipObject(['a', 'b', 'c'], [1, 2]); // {a: 1, b: 2, c: undefined}
hormone.zipObject(['a', 'b'], [1, 2, 3]); // {a: 1, b: 2}

// 改变数组元素
let arr = [1, 2, 3];
hormone.fill(arr, 'A') // ['A', 'A', 'A'];
hormone.fill(arr, 'B', 1) // [1, 'B', 'B'];
hormone.fill(arr, 'C', 1, 2) // [1, 'C', 3];

// 数组排序(采用冒泡法实现数组排序)
hormone.sort([2,1,3]); // [1,2,3]
```

### 浏览器


