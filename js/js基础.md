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
- [7.变量提升](#7变量提升)
  - [7.1带 var 和不带 var 的区别](#71带-var-和不带-var-的区别)
- [8说说你对Javascript中作用域的理解?](#8说说你对javascript中作用域的理解)
  - [8.1](#81)
  - [8.2词法作用域](#82词法作用域)
  - [8.3作用域链](#83作用域链)
- [9 JavaScript原型，原型链 ? 有什么特点？](#9-javascript原型原型链--有什么特点)
  - [9.1原型](#91原型)
  - [9.2原型链](#92原型链)
- [10 说说Javascript中的继承？如何实现继承？](#10-说说javascript中的继承如何实现继承)
  - [10.1原型链继承](#101原型链继承)
  - [10.2构造函数继承](#102构造函数继承)
  - [10.3组合继承](#103组合继承)
  - [10.4原型式继承](#104原型式继承)
  - [10.5寄生式继承](#105寄生式继承)
  - [10.6寄生组合式继承](#106寄生组合式继承)
- [11说说你对Javascript中this对象的理解](#11说说你对javascript中this对象的理解)
  - [11.1绑定规则](#111绑定规则)
    - [11.1.1默认绑定](#1111默认绑定)
    - [11.1.2隐式绑定](#1112隐式绑定)
- [此时this指向的是window，这里的大家需要记住，this永远指向的是最后调用它的对象，虽然fn是对象b的方法，但是fn赋值给j时候并没有执行，所以最终指向window](#此时this指向的是window这里的大家需要记住this永远指向的是最后调用它的对象虽然fn是对象b的方法但是fn赋值给j时候并没有执行所以最终指向window)
    - [11.1.3new绑定](#1113new绑定)
    - [11.1.4显示修改](#1114显示修改)
    - [11.1.5箭头函数](#1115箭头函数)
    - [](#)
- [12JavaScript中执行上下文和执行栈是什么？](#12javascript中执行上下文和执行栈是什么)
- [- Eval 函数执行上下文：指的是运行在 eval 函数中的代码，很少用而且不建议使用](#--eval-函数执行上下文指的是运行在-eval-函数中的代码很少用而且不建议使用)
- [13](#13)
- [14](#14)
- [13](#13-1)

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
```
柯里化函数
柯里化的目的在于避免频繁调用具有相同参数函数的同时，又能够轻松的重用

// 假设我们有一个求长方形面积的函数
function getArea(width, height) {
    return width * height
}
// 如果我们碰到的长方形的宽老是10
const area1 = getArea(10, 20)
const area2 = getArea(10, 30)
const area3 = getArea(10, 40)

// 我们可以使用闭包柯里化这个计算面积的函数
function getArea(width) {
    return height => {
        return width * height
    }
}

const getTenWidthArea = getArea(10)
// 之后碰到宽度为10的长方形就可以这样计算面积
const area1 = getTenWidthArea(20)

// 而且如果遇到宽度偶尔变化也可以轻松复用
const getTwentyWidthArea = getArea(20)
```
```
使用闭包模拟私有方法
在JavaScript中，没有支持声明私有变量，但我们可以使用闭包来模拟私有方法

下面举个例子：

var Counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }
})();

var Counter1 = makeCounter();
var Counter2 = makeCounter();
console.log(Counter1.value()); /* logs 0 */
Counter1.increment();
Counter1.increment();
console.log(Counter1.value()); /* logs 2 */
Counter1.decrement();
console.log(Counter1.value()); /* logs 1 */
console.log(Counter2.value()); /* logs 0 */
```
上述通过使用闭包来定义公共函数，并令其可以访问私有函数和变量，这种方式也叫模块方式

两个计数器 Counter1 和 Counter2 是维护它们各自的独立性的，每次调用其中一个计数器时，通过改变这个变量的值，会改变这个闭包的词法环境，不会影响另一个闭包中的变量
## 7.变量提升
带 var 的只声明还没有被定义，带 function 的已经声明和定义
### 7.1带 var 和不带 var 的区别
```
// 1
console.log(a, b)
var a =12, b ='林一一'
function foo(){
// 2
    console.log(a, b)
// 3
    var a = b =13
    console.log(a, b)
}
foo()
console.log(a, b)

/* 输出：
    undefined undefined
    undefined "林一一"
    13 13
    12 13
*/
```
1处的 a, b 其实就是 window下面的属性为 undefined。在函数内部由于变量提升机制 a带 var 一开始就是 undefined，b不带var 将向上级作用域查找，找到全局作用域下的林一一所以2处打印出来的就是 undefined "林一一"。随后 a =13，window.b =13，即原来 b='林一一' 变成了 b=13，打印出13, 13，最后第4处打印处12, 13。所以结合流程图，很明显知道答案
## 8说说你对Javascript中作用域的理解?
### 8.1
作用域，即变量（变量作用域又称上下文）和函数生效（能被访问）的区域或集合
- 我们一般将作用域分成：

全局作用域

函数作用域：也叫局部作用域

块级作用域
```
ES6引入了let和const关键字,和var关键字不同，在大括号中使用let和const声明的变量存在于块级作用域中。在大括号之外不能访问这些变量

{
  // 块级作用域中的变量
  let greeting = 'Hello World!';
  var lang = 'English';
  console.log(greeting); // Prints 'Hello World!'
}
// 变量 'English'
console.log(lang);
// 报错：Uncaught ReferenceError: greeting is not defined
console.log(greeting);
```
### 8.2词法作用域
- 又叫静态作用域
- 变量被创建时就确定好了，而非执行阶段确定的
### 8.3作用域链
- 当在Javascript中使用一个变量的时候，首先Javascript引擎会尝试在当前作用域下去寻找该变量，如果没找到，再到它的上层作用域寻找，以此类推直到找到该变量或是已经到了全局作用域

- 如果在全局作用域里仍然找不到该变量，它就会在全局范围内隐式声明该变量(非严格模式下)或是直接报错
## 9 JavaScript原型，原型链 ? 有什么特点？
### 9.1原型
- 还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾
- 当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾
### 9.2原型链
```
每个对象的__proto__都是指向它的构造函数的原型对象prototype的

person1.__proto__ === Person.prototype
构造函数是一个函数对象，是通过 Function构造器产生的

Person.__proto__ === Function.prototype
原型对象本身是一个普通对象，而普通对象的构造函数都是Object

Person.prototype.__proto__ === Object.prototype
刚刚上面说了，所有的构造器都是函数对象，函数对象都是 Function构造产生的

Object.__proto__ === Function.prototype
Object的原型对象也有__proto__属性指向null，null是原型链的顶端

Object.prototype.__proto__ === null
```
下面作出总结：

- 一切对象都是继承自Object对象，Object 对象直接继承根源对象null

- 一切的函数对象（包括 Object 对象），都是继承自 Function 对象

- Object 对象直接继承自 Function 对象

- Function对象的__proto__会指向自己的原型对象，最终还是继承自Object对象
## 10 说说Javascript中的继承？如何实现继承？
下面给出JavaScripy常见的继承方式：

- 原型链继承

- 构造函数继承（借助 call）

- 组合继承

- 原型式继承

- 寄生式继承

- 寄生组合式继承
### 10.1原型链继承
```
 function Parent() {
    this.name = 'parent1';
    this.play = [1, 2, 3]
  }
  function Child() {
    this.type = 'child2';
  }
  Child.prototype = new Parent();
  console.log(new Child())
```
上面代码看似没问题，实际存在潜在问题
```
var s1 = new Child();
var s2 = new Child();
s1.play.push(4);
console.log(s1.play, s2.play); // [1,2,3,4]
```
改变s1的play属性，会发现s2也跟着发生变化了，这是因为两个实例使用的是同一个原型对象，内存空间是共享的
### 10.2构造函数继承
```
借助 call调用Parent函数
function Parent(){
    this.name = 'parent1';
}
Parent.prototype.getName = function () {
    return this.name;
}
function Child(){
    Parent1.call(this);
    this.type = 'child'
}
let child = new Child();
console.log(child);  // 没问题
console.log(child.getName());  // 会报错
```
可以看到，父类原型对象中一旦存在父类之前自己定义的方法，那么子类将无法继承这些方法

相比第一种原型链继承方式，父类的引用属性不会被共享，优化了第一种继承方式的弊端，但是只能继承父类的实例属性和方法，不能继承原型属性或者方法
### 10.3组合继承
前面我们讲到两种继承方式，各有优缺点。组合继承则将前两种方式继承起来
```
function Parent3 () {
    this.name = 'parent3';
    this.play = [1, 2, 3];
}

Parent3.prototype.getName = function () {
    return this.name;
}
function Child3() {
    // 第二次调用 Parent3()
    Parent3.call(this);
    this.type = 'child3';
}

// 第一次调用 Parent3()
Child3.prototype = new Parent3();
// 手动挂上构造器，指向自己的构造函数
Child3.prototype.constructor = Child3;
var s3 = new Child3();
var s4 = new Child3();
s3.play.push(4);
console.log(s3.play, s4.play);  // 不互相影响
console.log(s3.getName()); // 正常输出'parent3'
console.log(s4.getName()); // 正常输出'parent3'
```
这种方式看起来就没什么问题，方式一和方式二的问题都解决了，但是从上面代码我们也可以看到Parent3 执行了两次，造成了多构造一次的性能开销
### 10.4原型式继承
这里主要借助Object.create方法实现普通对象的继承

同样举个例子
```
let parent4 = {
    name: "parent4",
    friends: ["p1", "p2", "p3"],
    getName: function() {
      return this.name;
    }
  };

  let person4 = Object.create(parent4);
  person4.name = "tom";
  person4.friends.push("jerry");

  let person5 = Object.create(parent4);
  person5.friends.push("lucy");

  console.log(person4.name); // tom
  console.log(person4.name === person4.getName()); // true
  console.log(person5.name); // parent4
  console.log(person4.friends); // ["p1", "p2", "p3","jerry","lucy"]
  console.log(person5.friends); // ["p1", "p2", "p3","jerry","lucy"]
  ```
这种继承方式的缺点也很明显，因为Object.create方法实现的是浅拷贝，多个实例的引用类型属性指向相同的内存，存在篡改的可能
### 10.5寄生式继承
寄生式继承在上面继承基础上进行优化，利用这个浅拷贝的能力再进行增强，添加一些方法
```
let parent5 = {
    name: "parent5",
    friends: ["p1", "p2", "p3"],
    getName: function() {
        return this.name;
    }
};

function clone(original) {
    let clone = Object.create(original);
    clone.getFriends = function() {
        return this.friends;
    };
    return clone;
}

let person5 = clone(parent5);

console.log(person5.getName()); // parent5
console.log(person5.getFriends()); // ["p1", "p2", "p3"]
```
### 10.6寄生组合式继承
寄生组合式继承，借助解决普通对象的继承问题的Object.create 方法，在几种继承方式的优缺点基础上进行改造，这也是所有继承方式里面相对最优的继承方式
```
function clone (parent, child) {
    // 这里改用 Object.create 就可以减少组合继承中多进行一次构造的过程
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

function Parent6() {
    this.name = 'parent6';
    this.play = [1, 2, 3];
}
Parent6.prototype.getName = function () {
    return this.name;
}
function Child6() {
    Parent6.call(this);
    this.friends = 'child5';
}

clone(Parent6, Child6);

Child6.prototype.getFriends = function () {
    return this.friends;
}

let person6 = new Child6(); 
console.log(person6); //{friends:"child5",name:"child5",play:[1,2,3],__proto__:Parent6}
console.log(person6.getName()); // parent6
console.log(person6.getFriends()); // child5
```
利用babel工具进行转换，我们会发现extends实际采用的也是寄生组合继承方式，因此也证明了这种方式是较优的解决继承的方式
## 11说说你对Javascript中this对象的理解
- this 关键字是函数运行时自动生成的一个内部对象，只能在函数内部使用，总指向调用它的对象
### 11.1绑定规则
根据不同的使用场合，this有不同的值，主要分为下面几种情况：
- 默认绑定
- 隐式绑定
- new绑定
- 显示绑定
#### 11.1.1默认绑定
全局环境中定义person函数，内部使用this关键字
```
var name = 'Jenny';
function person() {
    return this.name;
}
console.log(person());  //Jenny
```
上述代码输出Jenny，原因是调用函数的对象在游览器中位window，因此this指向window，所以输出Jenny

注意：

严格模式下，不能将全局对象用于默认绑定，this会绑定到undefined，只有函数运行在非严格模式下，默认绑定才能绑定到全局对象
#### 11.1.2隐式绑定
**函数还可以作为某个对象的方法调用，这时this就指这个上级对象**
```
function test() {
  console.log(this.x);
}
var obj = {};
obj.x = 1;
obj.m = test;
obj.m(); // 1
```
这个函数中包含多个对象，尽管这个函数是被最外层的对象所调用，this指向的也只是它上一级的对象
```
var o = {
    a:10,
    b:{
        fn:function(){
            console.log(this.a); //undefined
        }
    }
}
o.b.fn();
```
上述代码中，this的上一级对象为b，b内部并没有a变量的定义，所以输出undefined
这里再举一种特殊情况
```
var o = {
    a:10,
    b:{
        a:12,
        fn:function(){
            console.log(this.a); //undefined
            console.log(this); //window
        }
    }
}
var j = o.b.fn;
j();
```
此时this指向的是window，这里的大家需要记住，this永远指向的是最后调用它的对象，虽然fn是对象b的方法，但是fn赋值给j时候并没有执行，所以最终指向window
---
隐式绑定有一个大陷阱，绑定很容易丢失
```
function sayHi(){
    console.log('Hello,', this.name);
}
var person = {
    name: 'YvetteLau',
    sayHi: sayHi
}
var name = 'Wiliam';
var Hi = person.sayHi;
Hi();
结果是: Hello,Wiliam.
```
```
function sayHi(){
    console.log('Hello,', this.name);
}
var person1 = {
    name: 'YvetteLau',
    sayHi: function(){
        setTimeout(function(){
            console.log('Hello,',this.name);
        })
    }
}
var person2 = {
    name: 'Christina',
    sayHi: sayHi
}
var name='Wiliam';
person1.sayHi();
setTimeout(person2.sayHi,100);
setTimeout(function(){
    person2.sayHi();
},200);

 结果为:
Hello, Wiliam
Hello, Wiliam
Hello, Christina
```

#### 11.1.3new绑定
通过构建函数new关键字生成一个实例对象，此时this指向这个实例对象
```
function test() {
 this.x = 1;
}

var obj = new test();
obj.x // 1
```
上述代码之所以能过输出1，是因为new关键字改变了this的指向
这里再列举一些特殊情况：
new过程遇到return一个对象，此时this指向为返回的对象
```
function fn()  
{  
    this.user = 'xxx';  
    return {};  
}
var a = new fn();  
console.log(a.user); //undefined
```
如果返回一个简单类型的时候，则this指向实例对象
```
function fn()  
{  
    this.user = 'xxx';  
    return 1;
}
var a = new fn;  
console.log(a.user); //xxx
```
注意的是null虽然也是对象，但是此时new仍然指向实例对象
```
function fn()  
{  
    this.user = 'xxx';  
    return null;
}
var a = new fn;  
console.log(a.user); //xxx
```
#### 11.1.4显示修改
apply()、call()、bind()是函数的一个方法，作用是改变函数的调用对象。它的第一个参数就表示改变后的调用这个函数的对象。因此，这时this指的就是这第一个参数
```
var x = 0;
function test() {
 console.log(this.x);
}
var obj = {};
obj.x = 1;
obj.m = test;
obj.m.apply(obj) // 1
```
call和apply都会执行对应的函数，而bind方法不会
```
function sayHi(){
    console.log('Hello,', this.name);
}
var person = {
    name: 'YvetteLau',
    sayHi: sayHi
}
var name = 'Wiliam';
var Hi = person.sayHi;
Hi.call(person); //Hi.apply(person)
复制代码输出的结果为: Hello, YvetteLau.
```
```
function sayHi(){
    console.log('Hello,', this.name);
}
var person = {
    name: 'YvetteLau',
    sayHi: sayHi
}
var name = 'Wiliam';
var Hi = function(fn) {
    fn();
}
Hi.call(person, person.sayHi); 
```
输出的结果是 Hello, Wiliam. 原因很简单，Hi.call(person, person.sayHi)的确是将this绑定到Hi中的this了。但是在执行fn的时候，相当于直接调用了sayHi方法(记住: person.sayHi已经被赋值给fn了，隐式绑定也丢了)，没有指定this的值，对应的是默认绑定。

现在，我们希望绑定不会丢失，要怎么做？很简单，调用fn的时候，也给它硬绑定。
```
function sayHi(){
    console.log('Hello,', this.name);
}
var person = {
    name: 'YvetteLau',
    sayHi: sayHi
}
var name = 'Wiliam';
var Hi = function(fn) {
    fn.call(this);
}
Hi.call(person, person.sayHi);
```
输出的结果为: Hello, YvetteLau，

**绑定优先级:new绑定 > 显式绑定 > 隐式绑定 > 默认绑定**
#### 11.1.5箭头函数
在 ES6 的语法中还提供了箭头函语法，让我们在代码书写时就能确定 this 的指向（编译时绑定）
```
const obj = {
  sayThis: () => {
    console.log(this);
  }
};

obj.sayThis(); // window 因为 JavaScript 没有块作用域，所以在定义 sayThis 的时候，里面的 this 就绑到 window 上去了
const globalSay = obj.sayThis;
globalSay(); // window 浏览器中的 global 对象
```
箭头函数在使用时，需要注意以下几点:
-（1）函数体内的this对象，继承的是外层代码块的this。
-（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
-（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
-（4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
-（5）箭头函数没有自己的this，所以不能用call()、apply()、bind()这些方法去改变this的指向.

**箭头函数没有自己的this，箭头函数中的this继承于外层代码库中的this.**
#### 
```
var number = 5;
var obj = {
    number: 3,
    fn: (function () {
        var number;
        this.number *= 2;
        number = number * 2;
        number = 3;
        return function () {
            var num = this.number;
            this.number *= 2;
            console.log(num);
            number *= 3;
            console.log(number);
        }
    })()
}
var myFun = obj.fn;
myFun.call(null);
obj.fn();
console.log(window.number);
```
代码的执行过程。

- 1.在定义obj的时候，fn对应的闭包就执行了，返回其中的函数，执行闭包中代码时，显然应用不了new绑定(没有出现new 关键字)，硬绑定也没有(没有出现call,apply,bind关键字),隐式绑定有没有？很显然没有，如果没有XX.fn()，那么可以肯定没有应用隐式绑定，所以这里应用的就是默认绑定了，非严格模式下this绑定到了window上(浏览器执行环境)。【这里很容易被迷惑的就是以为this指向的是obj，一定要注意，除非是箭头函数，否则this跟词法作用域是两回事，一定要牢记在心】
```
window.number * = 2; //window.number的值是10(var number定义的全局变量是挂在window上的)

number = number * 2; //number的值是NaN;注意我们这边定义了一个number，但是没有赋值，number的值是undefined;Number(undefined)->NaN

number = 3;          //number的值为3
```
- 2.myFun.call(null);我们前面说了，call的第一个参数传null，调用的是默认绑定;
```
fn: function(){
    var num = this.number;
    this.number *= 2;
    console.log(num);
    number *= 3;
    console.log(number);
}
```
执行时:
```
var num = this.number; //num=10; 此时this指向的是window
this.number * = 2;     //window.number = 20
console.log(num);      //输出结果为10
number *= 3;           //number=9; 这个number对应的闭包中的number;闭包中的number的是3
console.log(number);   //输出的结果是9
```
- 3.obj.fn();应用了隐式绑定，fn中的this对应的是obj.
```
var num = this.number;//num = 3;此时this指向的是obj
this.number *= 2;     //obj.number = 6;
console.log(num);     //输出结果为3;
number *= 3;          //number=27;这个number对应的闭包中的number;闭包中的number的此时是9
console.log(number);  //输出的结果是27
```
最后一步console.log(window.number);输出的结果是20

因此组中结果为:
```
10
9
3
27
20
```
## 12JavaScript中执行上下文和执行栈是什么？
执行上下文的类型分为三种：

- 全局执行上下文：只有一个，浏览器中的全局对象就是 window对象，this 指向这个全局对象
- 函数执行上下文：存在无数个，只有在函数被调用的时候才会被创建，每次调用函数都会创建一个新的执行上下文
- Eval 函数执行上下文：指的是运行在 eval 函数中的代码，很少用而且不建议使用
---
## 13
## 14













## 13