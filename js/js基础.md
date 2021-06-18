<!-- TOC -->

- [1.数组常用方法](#1数组常用方法)
- [length()](#length)
- [2.字符串常用方法](#2字符串常用方法)
- [length()](#length-1)
- [3.类型转换机制](#3类型转换机制)
  - [3.1显示转换](#31显示转换)
    - [3.1。1数字 Number()](#311数字-number)
    - [3.1.2parseInt()](#312parseint)
    - [3.1.3字符串 String()](#313字符串-string)
    - [3.1.4布尔类型 Boolean()](#314布尔类型-boolean)
  - [3.2隐式转换](#32隐式转换)
    - [3.2.1自动准换为Boolean](#321自动准换为boolean)
    - [3.2.2自动转换为字符串](#322自动转换为字符串)
    - [3.2.3自动准换为数值](#323自动准换为数值)
- [4.===和==区别](#4和区别)
  - [4.1==](#41)
- [5.深拷贝浅拷贝的区别？如何实现一个深拷贝？](#5深拷贝浅拷贝的区别如何实现一个深拷贝)
  - [5.1浅拷贝](#51浅拷贝)
  - [5.2深拷贝](#52深拷贝)
- [6说说你对闭包的理解？闭包使用场景?](#6说说你对闭包的理解闭包使用场景)
  - [6.1](#61)
  - [6.2使用场景](#62使用场景)

<!-- /TOC -->
## 1.数组常用方法
增删改查
push(),pop(),unshift(),shift()
splice()
indexOf(),includes()
排序
sort(),reserve()
迭代
forEach(),map(),every(),some(),filter()
长度
length()
---
concat(),slice(),find()
## 2.字符串常用方法
增删改查
+
slice(),substring()
indexOf(),chartAt()
切分
split()
模式匹配
match()
replace()
长度
length()
---
concat(),includes(),search()
## 3.类型转换机制
- JS中有六种简单数据类型：undefined、null、boolean、string、number、symbol，以及引用类型：object
### 3.1显示转换
#### 3.1。1数字 Number()
```
Number(324) // 324

// 字符串：如果可以被解析为数值，则转换为相应的数值
Number('324') // 324

// 字符串：如果不可以被解析为数值，返回 NaN
Number('324abc') // NaN

// 空字符串转为0
Number('') // 0

// 布尔值：true 转成 1，false 转成 0
Number(true) // 1
Number(false) // 0

// undefined：转成 NaN
Number(undefined) // NaN

// null：转成0
Number(null) // 0

// 对象：通常转换成NaN(除了只包含单个数值的数组)
Number({a: 1}) // NaN
Number([1, 2, 3]) // NaN
Number([5]) // 5
```
Number转换的时候是很严格的，只要有一个字符无法转成数值，整个字符串就会被转为NaN
#### 3.1.2parseInt()

parseInt相比Number，就没那么严格了，parseInt函数逐个解析字符，遇到不能转换的字符就停下来
```
parseInt('32a3') //32
```
#### 3.1.3字符串 String()
```
// 数值：转为相应的字符串
String(1) // "1"

//字符串：转换后还是原来的值
String("a") // "a"

//布尔值：true转为字符串"true"，false转为字符串"false"
String(true) // "true"

//undefined：转为字符串"undefined"
String(undefined) // "undefined"

//null：转为字符串"null"
String(null) // "null"

//对象
String({a: 1}) // "[object Object]"
String([1, 2, 3]) // "1,2,3"
```
#### 3.1.4布尔类型 Boolean()
```
Boolean(undefined) // false
Boolean(null) // false
Boolean(0) // false
Boolean(NaN) // false
Boolean('') // false
Boolean({}) // true
Boolean([]) // true
Boolean(new Boolean(false)) // true
```
### 3.2隐式转换
#### 3.2.1自动准换为Boolean
可以得出个小结：
undefined
null
false
+0
-0
NaN
""
除了上面几种会被转化成false，其他都换被转化成true
#### 3.2.2自动转换为字符串
```
'5' + 1 // '51'
'5' + true // "5true"
'5' + false // "5false"
'5' + {} // "5[object Object]"
'5' + [] // "5"
'5' + function (){} // "5function (){}"
'5' + undefined // "5undefined"
'5' + null // "5null"
```
#### 3.2.3自动准换为数值
```
'5' - '2' // 3
'5' * '2' // 10
true - 1  // 0
false - 1 // -1
'1' - 1   // 0
'5' * []    // 0
false / '5' // 0
'abc' - 1   // NaN
null + 1 // 1
undefined + 1 // NaN
```
## 4.===和==区别
### 4.1==
- 两个都为简单类型，字符串和布尔值都会转换成数值，再比较

- 简单类型与引用类型比较，对象转化成其原始类型的值，再比较

- 两个都为引用类型，则比较它们是否指向同一个对象

- null 和 undefined 相等

- 存在 NaN 则返回 false
```
'' == '0' // false
0 == '' // true
0 == '0' // true

false == 'false' // false
false == '0' // true

false == undefined // false
false == null // false
null == undefined // true

' \t\r\n' == 0 // true
```
除了在比较对象属性为null或者undefined的情况下，我们可以使用相等操作符（==），其他情况建议一律使用全等操作符（===）

## 5.深拷贝浅拷贝的区别？如何实现一个深拷贝？
### 5.1浅拷贝
- Object.assign()
```
let obj1 = { person: {name: "kobe", age: 41},sports:'basketball' };
let obj2 = Object.assign({}, obj1);
obj2.person.name = "wade";
obj2.sports = 'football'
console.log(obj1); // { person: { name: 'wade', age: 41 }, sports: 'basketball' }
```
-lodsh    _.clone方法
- 展开运算符
```
let obj1 = { name: 'Kobe', address:{x:100,y:100}}
let obj2= {... obj1}
obj1.address.x = 200;
obj1.name = 'wade'
console.log('obj2',obj2) // obj2 { name: 'Kobe', address: { x: 200, y: 100 } }
```
- array.concat()
```
let arr = [1, 3, {
    username: 'kobe'
    }];
let arr2 = arr.concat();    
arr2[2].username = 'wade';
console.log(arr); //[ 1, 3, { username: 'wade' } ]
```
- array.slice()
```
let arr = [1, 3, {
    username: ' kobe'
    }];
let arr3 = arr.slice();
arr3[2].username = 'wade'
console.log(arr); // [ 1, 3, { username: 'wade' } ]
```
### 5.2深拷贝
-JSON.parse(JSON.string())
这种方法虽然可以实现数组或对象深拷贝,但不能处理函数和正则，因为这两者基于JSON.stringify和JSON.parse处理后，得到的正则就不再是正则（变为空对象），得到的函数就不再是函数（变为null）了。
-lodash  _.cloneDeep方法
-jQuery $.extend()
-手写递归
```
function deepClone(obj, hash = new WeakMap()) {
  if (obj === null) return obj; // 如果是null或者undefined我就不进行拷贝操作
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
  if (typeof obj !== "object") return obj;
  // 是对象的话就要进行深拷贝
  if (hash.get(obj)) return hash.get(obj);
  let cloneObj = new obj.constructor();
  // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
  hash.set(obj, cloneObj);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 实现一个递归拷贝
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }
  return cloneObj;
}
let obj = { name: 1, address: { x: 100 } };
obj.o = obj; // 对象存在循环引用的情况
let d = deepClone(obj);
obj.address.x = 200;
console.log(d);
```
## 6说说你对闭包的理解？闭包使用场景?
### 6.1
内部函数可以访问其外部的变量
```
function init() {
    var name = "Mozilla"; // name 是一个被 init 创建的局部变量
    function displayName() { // displayName() 是内部函数，一个闭包
        alert(name); // 使用了父函数中声明的变量
    }
    displayName();
}
init();
```
内部函数携带的小背包
### 6.2使用场景
任何闭包的使用场景都离不开这两点：
- 创建私有变量
- 延长变量的生命周期