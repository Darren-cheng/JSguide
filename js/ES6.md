<!-- TOC -->

- [1.说说var、let、const之间的区别](#1说说varletconst之间的区别)
  - [1.1变量提升](#11变量提升)
  - [1.2暂时性死区](#12暂时性死区)
  - [1.3块级作用域](#13块级作用域)
  - [1.4重复声明](#14重复声明)
  - [1.5修改声明的变量](#15修改声明的变量)
  - [1.6使用](#16使用)
- [2.ES6中数组新增了哪些扩展?](#2es6中数组新增了哪些扩展)
- [3.ES6中对象新增了哪些扩展?](#3es6中对象新增了哪些扩展)
- [4.ES6中函数新增了哪些扩展?](#4es6中函数新增了哪些扩展)
- [5.ES6中新增的Set、Map两种数据结构怎么理解?](#5es6中新增的setmap两种数据结构怎么理解)
  - [5.1set](#51set)
  - [5.2map](#52map)
  - [5.3WeakSet 和 WeakMap](#53weakset-和-weakmap)
- [6.你是怎么理解ES6中 Promise的？使用场景？(待补充)](#6你是怎么理解es6中-promise的使用场景待补充)
  - [6.1状态](#61状态)
  - [6.2实例方法](#62实例方法)
  - [6.3构造函数方法](#63构造函数方法)
  - [6.4手写promise](#64手写promise)
- [7.怎么理解ES6中 Generator的？使用场景？(待补充)](#7怎么理解es6中-generator的使用场景待补充)
- [8.你是怎么理解ES6中Proxy的？使用场景?](#8你是怎么理解es6中proxy的使用场景)
- [9.async](#9async)
- [10.你是怎么理解ES6中Module的？使用场景？](#10你是怎么理解es6中module的使用场景)
- [11.你是怎么理解ES6中 Decorator 的？使用场景？](#11你是怎么理解es6中-decorator-的使用场景)

<!-- /TOC -->
## 1.说说var、let、const之间的区别
### 1.1变量提升
var 存在 let const不存在
### 1.2暂时性死区
var不存在暂时性死区
let和const存在暂时性死区，只有等到声明变量的那一行代码出现，才可以获取和使用该变量
### 1.3块级作用域
var不存在块级作用域
let和const存在块级作用域
### 1.4重复声明 
var允许重复声明变量
let和const在同一作用域不允许重复声明变量
### 1.5修改声明的变量
var和let可以
const声明一个只读的常量。一旦声明，常量的值就不能改变
### 1.6使用
能用const的情况尽量使用const，其他情况下大多数使用let，避免使用var
## 2.ES6中数组新增了哪些扩展?
- 扩展运算符 
-- ...(浅拷贝)
-- 如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错
-- 如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错

- 数组新增
-- Array.from()
-- Array.of()

- 数组实例对象
--copyWithin()
-- find()、findIndex()
-- fill()
--entries()，keys()，values()
-- includes()
-- flat()，flatMap()
## 3.ES6中对象新增了哪些扩展?
- 属性的简写
简写的对象方法不能用作构造函数，否则会报错
- 属性名表达式
-- 属性名表达式与简洁表示法，不能同时使用，会报错
-- 属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串[object Object]
- super关键字
指向当前对象的原型对象
- 扩展运算符的应用
解构赋值必须是最后一个参数，否则会报错
-属性的遍历(5种)
--  for...in
-- Object.keys(obj)
-- Object.getOwnPropertyNames(obj)
-- Object.getOwnPropertySymbols(obj)
-- Reflect.ownKeys(obj)
--- 首先遍历所有数值键，按照数值升序排列
其次遍历所有字符串键，按照加入时间升序排列
最后遍历所有 Symbol 键，按照加入时间升序排
-方法
-- Object.is()
-- Object.assign()
-- Object.getOwnPropertyDescriptors()
-- Object.setPrototypeOf()，Object.getPrototypeOf()
-- Object.keys()，Object.values()，Object.entries()
-- Object.fromEntries()
## 4.ES6中函数新增了哪些扩展?
- ES6允许为函数的参数设置默认值
- 属性
-- length将返回没有指定默认值的参数个数
如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了
-- name属性
Function构造函数返回的函数实例，name属性的值为anonymous
```
(new Function).name // "anonymous"
```
bind返回的函数，name属性值会加上bound前缀
```
function foo() {};
foo.bind({}).name // "bound foo"

(function(){}).bind({}).name // "bound "
```
- 作用域
- 严格模式
- 箭头函数
## 5.ES6中新增的Set、Map两种数据结构怎么理解?
- Set是一种叫做集合的数据结构，Map是一种叫做字典的数据结构

- 共同点：集合、字典都可以存储不重复的值
- 不同点：集合是以[值，值]的形式存储元素，字典是以[键，值]的形式存储
### 5.1set
```
const  set=new Set()
```
```
add()
delect()
has()
clear()
```
```
keys()  values()   entries()  forEach()
```
```
let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]
```
### 5.2map
```
const map=new Map()
```
```
size,set(),get(),has(),delect(),clear()
```
```
keys()  values()   entries()  forEach()
```
### 5.3WeakSet 和 WeakMap
WeakSet()
- 在API中WeakSet与Set有两个区别：
-- 没有遍历操作的API
-- 没有size属性
- WeackSet只能成员只能是引用类型，而不能是其他类型的值
```
let ws=new WeakSet();

// 成员不是引用类型
let weakSet=new WeakSet([2,3]);
console.log(weakSet) // 报错

// 成员为引用类型
let obj1={name:1}
let obj2={name:1}
let ws=new WeakSet([obj1,obj2]); 
console.log(ws) //WeakSet {{…}, {…}}
```
WeakMap
- 在API中WeakMap与Map有两个区别：
-- 没有遍历操作的API
-- 没有clear清空方法
- WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名
```
const map = new WeakMap();
map.set(1, 2)
// TypeError: 1 is not an object!
map.set(Symbol(), 2)
// TypeError: Invalid value used as weak map key
map.set(null, 2)
// TypeError: Invalid value used as weak map key
```
注意：WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用
## 6.你是怎么理解ES6中 Promise的？使用场景？(待补充)
### 6.1状态
- promise对象仅有三种状态
pending（进行中）
fulfilled（已成功）
rejected（已失败）
### 6.2实例方法
then()：then方法返回的是一个新的Promise实例
catch()：catch()方法之中，还能再抛出错误，通过后面catch方法捕获到
finally()
### 6.3构造函数方法
all()
race()
allSettled()
resolve()
reject()
try()










### 6.4手写promise
## 7.怎么理解ES6中 Generator的？使用场景？(待补充)

Generator函数是一个普通函数，但是有两个特征：
function关键字与函数名之间有一个星号
函数体内部使用yield表达式，定义不同的内部状态
```
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}
```
通过next方法才会遍历到下一个内部状态，其运行逻辑如下：
- 遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。
- 下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式
- 如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。
- 如果该函数没有return语句，则返回的对象的value属性值为undefined


let interator=function(item){
  let i=0
  next:function(){
    let done=i==item.length-1?true:false
    let value=done?undefined:i++
    return {
      value:
      done:
    }
  }
}
let generator=interator([1,2,3])




**注意，由于next方法的参数表示上一个yield表达式的返回值，所以在第一次使用next方法时，传递参数是无效的。V8 引擎直接忽略第一次使用next方法时的参数，只有从第二次使用next方法开始，参数才是有效的。从语义上讲，第一个next方法用来启动遍历器对象，所以不用带有参数。**


**注意，不要混淆遍历器对象的throw方法和全局的throw命令。上面代码的错误，是用遍历器对象的throw方法抛出的，而不是用throw命令抛出的。后者只能被函数体外的catch语句捕获。**
```
var g = function* () {
  while (true) {
    try {
      yield;
    } catch (e) {
      if (e != 'a') throw e;
      console.log('内部捕获', e);
    }
  }
};

var i = g();
i.next();

try {
  throw new Error('a');
  throw new Error('b');
} catch (e) {
  console.log('外部捕获', e);
}
// 外部捕获 [Error: a]
```
## 8.你是怎么理解ES6中Proxy的？使用场景?
Proxy其功能非常类似于设计模式中的代理模式，常用功能如下：
- 拦截和监视外部对对象的访问
- 降低函数或类的复杂度
- 在复杂操作前对操作进行校验或对所需资源进行管理
使用 Proxy 保障数据类型的准确性

声明了一个私有的 apiKey，便于 api 这个对象内部的方法调用，但不希望从外部也能够访问 api._apiKey

还能通过使用Proxy实现观察者模式
## 9.async 
它就是 Generator 函数的语法糖

async函数的返回值是 Promise 对象
## 10.你是怎么理解ES6中Module的？使用场景？
ES6设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量

es6模块功能主要由两个命令构成：
- export：用于规定模块的对外接口
- import：用于输入其他模块提供的功能
## 11.你是怎么理解ES6中 Decorator 的？使用场景？
装饰者模式就是一种在不改变原类和使用继承的情况下，动态地扩展对象功能的设计理论

Docorator修饰对象为下面两种：
- 类的装饰
- 类属性的装饰

装饰器只能用于类和类的方法，不能用于函数，因为存在函数提升