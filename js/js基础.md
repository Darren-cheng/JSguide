<!-- TOC -->

- [1.数组常用方法](#1数组常用方法)
- [2.字符串常用方法](#2字符串常用方法)
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
### 12.1执行上下文的生命周期
- 执行上下文的生命周期包括三个阶段：创建阶段 → 执行阶段 → 回收阶段
#### 12.1.1创建阶段
创建阶段即当函数被调用，但未执行任何其内部代码之前

创建阶段做了三件事：
- 确定 this 的值，也被称为 This Binding
- LexicalEnvironment（词法环境） 组件被创建
- VariableEnvironment（变量环境） 组件被创建
##### 12.1.1.1This Binding
确定this的值我们前面讲到，this的值是在执行的时候才能确认，定义的时候不能确认

##### 12.1.1.2词法环境
词法环境有两个组成部分：

全局环境：是一个没有外部环境的词法环境，其外部环境引用为null，有一个全局对象，this 的值指向这个全局对象

函数环境：用户在函数中定义的变量被存储在环境记录中，包含了arguments 对象，外部环境的引用可以是全局环境，也可以是包含内部函数的外部函数环境
##### 12.1.1.3变量环境
变量环境也是一个词法环境，因此它具有上面定义的词法环境的所有属性

在 ES6 中，词法环境和变量环境的区别在于前者用于存储函数声明和变量（ let 和 const ）绑定，而后者仅用于存储变量（ var ）绑定


let和const定义的变量a和b在创建阶段没有被赋值，但var声明的变量从在创建阶段被赋值为undefined

这是因为，创建阶段，会在代码中扫描变量和函数声明，然后将函数声明存储在环境中

但变量会被初始化为undefined(var声明的情况下)和保持uninitialized(未初始化状态)(使用let和const声明的情况下)

这就是变量提升的实际原因

#### 12.1.2执行阶段
在这阶段，执行变量赋值、代码执行

如果 Javascript 引擎在源代码中声明的实际位置找不到变量的值，那么将为其分配 undefined 值

#### 12.1.3回收阶段
执行上下文出栈等待虚拟机回收执行上下文

### 12.2执行栈

执行栈，也叫调用栈，具有 LIFO（后进先出）结构，用于存储在代码执行期间创建的所有执行上下文


当Javascript引擎开始执行你第一行脚本代码的时候，它就会创建一个全局执行上下文然后将它压到执行栈中

每当引擎碰到一个函数的时候，它就会创建一个函数执行上下文，然后将这个执行上下文压到执行栈中

引擎会执行位于执行栈栈顶的执行上下文(一般是函数执行上下文)，当该函数执行结束后，对应的执行上下文就会被弹出，然后控制流程到达执行栈的下一个执行上下文
## 13JavaScript中的事件模型如何理解?
事件流都会经历三个阶段：
- 事件捕获阶段(capture phase)
- 处于目标阶段(target phase)
- 事件冒泡阶段(bubbling phase)

### 13.1事件模型
事件模型可以分为三种：
- 原始事件模型（DOM0级）
- 标准事件模型（DOM2级）
- IE事件模型（基本不用）
### 13.1.1原始事件模型
事件绑定监听函数比较简单, 有两种方式：
- HTML代码中直接绑定
```
<input type="button" onclick="fun()">
```
- 通过JS代码绑定
```
var btn = document.getElementById('.btn');
btn.onclick = fun;
```
特性
- 绑定速度快
DOM0级事件具有很好的跨浏览器优势，会以最快的速度绑定，但由于绑定速度太快，可能页面还未完全加载出来，以至于事件可能无法正常运行

- 只支持冒泡，不支持捕获

- 同一个类型的事件只能绑定一次


删除 DOM0 级事件处理程序只要将对应事件属性置为null即可
```
btn.onclick = null;
```
### 13.1.2标准事件模型
在该事件模型中，一次事件共有三个过程:

- 事件捕获阶段：事件从document一直向下传播到目标元素, 依次检查经过的节点是否绑定了事件监听函数，如果有则执行
- 事件处理阶段：事件到达目标元素, 触发目标元素的监听函数
- 事件冒泡阶段：事件从目标元素冒泡到document, 依次检查经过的节点是否绑定了事件监听函数，如果有则执行

事件绑定监听函数的方式如下:
```
addEventListener(eventType, handler, useCapture)
```
事件移除监听函数的方式如下:
```
removeEventListener(eventType, handler, useCapture)
```

参数如下：
- eventType指定事件类型(不要加on)
- handler是事件处理函数
- useCapture是一个boolean用于指定是否在捕获阶段进行处理，一般设置为false与IE浏览器保持一致
举个例子：
```
var btn = document.getElementById('.btn');
btn.addEventListener(‘click’, showMessage, false);
btn.removeEventListener(‘click’, showMessage, false);
```
特性
- 可以在一个DOM元素上绑定多个事件处理器，各自并不会冲突

- 执行时机
当第三个参数(useCapture)设置为true就在捕获过程中执行，反之在冒泡过程中执行处理函数
## 14说说 typeof 与 instanceof 区别?
关于instanceof的实现原理，可以参考下面：
```
function myInstanceof(left, right) {
    // 这里先用typeof来判断基础数据类型，如果是，直接返回false
    if(typeof left !== 'object' || left === null) return false;
    // getProtypeOf是Object对象自带的API，能够拿到参数的原型对象
    let proto = Object.getPrototypeOf(left);
    while(true) {                  
        if(proto === null) return false;
        if(proto === right.prototype) return true;//找到相同原型对象，返回true
        proto = Object.getPrototypeof(proto);
    }
}
```
也就是顺着原型链去找，直到找到相同的原型对象，返回true，否则为false


- 如果需要通用检测数据类型，可以采用Object.prototype.toString，调用该方法，统一返回格式“[object Xxx]”的字符串
## 15解释下什么是事件代理？应用场景？
事件委托，会把一个或者一组元素的事件委托到它的父层或者更外层元素上，真正绑定事件的是外层元素，而不是目标元素

当事件响应到目标元素上时，会通过事件冒泡机制从而触发它的外层元素的绑定事件上，然后在外层元素上去执行函数

适合事件委托的事件有：click，mousedown，mouseup，keydown，keyup，keypress

从上面应用场景中，我们就可以看到使用事件委托存在两大优点：

- 减少整个页面所需的内存，提升整体性能
- 动态绑定，减少重复工作

但是使用事件委托也是存在局限性：

- focus、blur这些事件没有事件冒泡机制，所以无法进行委托绑定事件

- mousemove、mouseout这样的事件，虽然有事件冒泡，但是只能不断通过位置去计算定位，对性能消耗高，因此也是不适合于事件委托的
## 16说说new操作符具体都干了什么？
从上面介绍中，我们可以看到new关键字主要做了以下的工作：

- 创建一个新的对象obj
- 将对象与构建函数通过原型链连接起来
- 将构建函数中的this绑定到新建的对象obj上
- 根据构建函数返回类型作判断，如果是原始值则被忽略，如果是返回对象，需要正常处理
### 16.1手写new操作符

现在我们已经清楚地掌握了new的执行过程

那么我们就动手来实现一下new
```
function mynew(Func, ...args) {
    // 1.创建一个新对象
    const obj = {}
    // 2.新对象原型指向构造函数原型对象
    obj.__proto__ = Func.prototype
    // 3.将构建函数的this指向新对象
    let result = Func.apply(obj, args)
    // 4.根据返回值判断
    return result instanceof Object ? result : obj
```
## 17Ajax 原理是什么？如何实现？
Ajax的原理简单来说通过XmlHttpRequest对象来向服务器发异步请求，从服务器获得数据，然后用JavaScript来操作DOM而更新页面
### 17.1实现过程
实现 Ajax异步交互需要服务器逻辑进行配合，需要完成以下步骤：

- 创建 Ajax的核心对象 XMLHttpRequest对象

- 通过 XMLHttpRequest 对象的 open() 方法与服务端建立连接

- 构建请求所需的数据内容，并通过XMLHttpRequest 对象的 send() 方法发送给服务器端

- 通过 XMLHttpRequest 对象提供的 onreadystatechange 事件监听服务器端你的通信状态

- 接受并处理服务端向客户端响应的数据结果

- 将处理结果更新到 HTML页面中
#### 17.1.1创建XMLHttpRequest对象
通过XMLHttpRequest() 构造函数用于初始化一个 XMLHttpRequest 实例对象
```
const xhr = new XMLHttpRequest();
```
#### 17.1.2与服务器建立连接
通过 XMLHttpRequest 对象的 open() 方法与服务器建立连接
```
xhr.open(method, url, [async][, user][, password])
```
参数说明：

- method：表示当前的请求方式，常见的有GET、POST

- url：服务端地址

- async：布尔值，表示是否异步执行操作，默认为true

- user: 可选的用户名用于认证用途；默认为`null

- password: 可选的密码用于认证用途，默认为`null
#### 17.1.3给服务端发送数据
通过 XMLHttpRequest 对象的 send() 方法，将客户端页面的数据发送给服务端
```
xhr.send([body])
```
- body: 在 XHR 请求中要发送的数据体，如果不传递数据则为 null

如果使用GET请求发送数据的时候，需要注意如下：

- 将请求数据添加到open()方法中的url地址中
- 发送请求数据中的send()方法中参数设置为null
#### 17.1.4绑定onreadystatechange事件
onreadystatechange 事件用于监听服务器端的通信状态，主要监听的属性为XMLHttpRequest.readyState 

只要 readyState属性值一变化，就会触发一次 readystatechange 事件


- XMLHttpRequest.responseText属性用于接收服务器端的响应结果
### 17.2手写
```
function ajax(options){
  //创建XMLHttpRequest对象
  const xhr=new XMLHTTPRequest()
   //初始化参数的内容
  options=options||{}
  options.type=(options.type||'GET).toUpperCase()
  options.dataType=option.dataType||'json'
  const params=options.data
  //发送请求
  if(options.type=='GET'){
    xhr.open('GET',options.url+'?'+params,true)
    xhr.send(null)
  }else if(options.type=='POST'){
    xhr.open('POST',options.url,true)
    xhr.send(params)
  }
  
  xhr.onreadystatechange=functuon(){
    if(xhr.readyState==4){
      let status=xhr.status
      if(status>200&&status<300>){
        options.success&&options.success{
          xhr.responseText,xhr.resposeXMl
        }
      }else{
        options.fail&&options.fail(status)
      }
    }
  }
}
```
```
ajax({
    type: 'post',
    dataType: 'json',
    data: {},
    url: 'https://xxxx',
    success: function(text,xml){//请求成功后的回调函数
        console.log(text)
    },
    fail: function(status){////请求失败后的回调函数
        console.log(status)
    }
})
```
## 18bind、call、apply 区别？如何实现一个bind?
apply、call、bind三者的区别在于：
- 三者都可以改变函数的this对象指向
- 三者第一个参数都是this要指向的对象，如果如果没-有这个参数或参数为undefined或null，则默认指向全局window
- 三者都可以传参，但是apply是数组，而call是参数列表，且apply和call是一次性传入参数，而bind可以分为多次传入
- bind是返回绑定this之后的函数，apply、call 则是立即执行
### 18.1手写bind:bangbang:
bind主要做了三件事
- 返回一个新的函数
- 新函数this指向bind的第一个参数
- 其余参数作为新函数的参数传入
核心要点:
1.对于普通函数，绑定this指向
2.对于构造函数，要保证原函数的原型对象上的属性不能丢失
```
Function.propertype.mybind=funciton(context,...args){
  if(typeof this!=function){
    throw new TypeError('Error')
  }
  var fn=this
  var args=[...argsments].slice(1)
  return function Fn(){
    return fn.apply(this instanceof Fn? new fn(..argments):context,args.concat(...arguments))
  }
  
}

Function.prototype.bind2 = function (context) {

    if (typeof this !== "function") {
      throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fNOP = function () {};

    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
    }

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}
```
## 19说说你对JavaScript中事件循环的理解
常见的微任务有：

- Promise.then

- MutaionObserver

- Object.observe（已废弃；Proxy 对象替代）

- process.nextTick（Node.js）
常见的宏任务有：

- script (可以理解为外层同步代码)
- setTimeout/setInterval
- UI rendering/UI事件
- postMessage、MessageChannel
- setImmediate、I/O（Node.js）


await 会阻塞下面的代码（即加入微任务队列），先执行 async外面的同步代码，同步代码执行完，再回到 async 函数中，再执行之前阻塞的代码

JS调用栈
JS调用栈采用的是后进先出的规则，当函数执行的时候，会被添加到栈的顶部，当执行栈执行完成后，就会从栈顶移出，直到栈内被清空。
## 20说说你对正则表达式的理解？应用场景？
贪婪模式：在匹配过程中，尝试可能的顺序是从多往少的方向去尝试
```
const string = "12345";
const regx = /(\d{1,3})(\d{1,3})/;
console.log( string.match(reg) );
// => ["12345", "123", "45", index: 0, input: "12345"]
```
懒惰模式：惰性量词就是在贪婪量词后面加个问号。表示尽可能少的匹配
```
var string = "12345";
var regex = /(\d{1,3}?)(\d{1,3})/;
console.log( string.match(regex) );
// => ["1234", "1", "234", index: 0, input: "12345"]
```
正则表达式常被用于某些方法，我们可以分成两类：

- 字符串（str）方法：match、matchAll、search、replace、split
- 正则对象下（regexp）的方法：test、exec

### 20.1.1str.match(regexp)
如果 regexp 不带有 g 标记
```
let str = "I love JavaScript";

let result = str.match(/Java(Script)/);

console.log( result[0] );     // JavaScript（完全匹配）
console.log( result[1] );     // Script（第一个分组）
console.log( result.length ); // 2

// 其他信息：
console.log( result.index );  // 7（匹配位置）
console.log( result.input );  // I love JavaScript（源字符串）
```
如果 regexp 带有 g 标记，则它将所有匹配项的数组作为字符串返回，而不包含分组和其他详细信息
```
let str = "I love JavaScript";

let result = str.match(/Java(Script)/g);

console.log( result[0] ); // JavaScript
console.log( result.length ); // 1
```
如果没有匹配项，则无论是否带有标记 g ，都将返回 null
```
let str = "I love JavaScript";

let result = str.match(/HTML/);

console.log(result); // null
```
### 20.1.2str.matchAll(regexp)
返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器
```
const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';

const array = [...str.matchAll(regexp)];

console.log(array[0]);
// expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// expected output: Array ["test2", "e", "st2", "2"]
```
### 20.1.3str.search(regexp)
返回第一个匹配项的位置，如果未找到，则返回 -1
### 20.1.4str.replace(regexp)
替换与正则表达式匹配的子串，并返回替换后的字符串。在不设置全局匹配g的时候，只替换第一个匹配成功的字符串片段
```
const reg1=/javascript/i;
const reg2=/javascript/ig;
console.log('hello Javascript Javascript Javascript'.replace(reg1,'js'));
//hello js Javascript Javascript
console.log('hello Javascript Javascript Javascript'.replace(reg2,'js'));
//hello js js js
```
### 20.1.5str.split(regexp)
使用正则表达式（或子字符串）作为分隔符来分割字符串
```
console.log('12, 34, 56'.split(/,\s*/)) // 数组 ['12', '34', '56']
```
### 20.2.1regexp.exec(str)
- 如果没有 g，那么 regexp.exec(str) 返回的第一个匹配与 str.match(regexp) 完全相同

- 如果有标记 g，调用 regexp.exec(str) 会返回第一个匹配项，并将紧随其后的位置保存在属性regexp.lastIndex 中。下一次同样的调用会从位置 regexp.lastIndex 开始搜索，返回下一个匹配项，并将其后的位置保存在 regexp.lastIndex 中


### 20.2.2regexp.test(str)
查找匹配项，然后返回 true/false 表示是否存在
```
let str = "I love JavaScript";

// 这两个测试相同
console.log( /love/i.test(str) ); // true
```
### 20.3
例子
- 1.验证QQ合法性（5~15位、全是数字、不以0开头）：
```
const reg = /^[1-9][0-9]{4,14}$/
const isvalid = patrn.exec(s)
```
- 2.校验用户账号合法性（只能输入5-20个以字母开头、可带数字、“_”、“.”的字串）：
```
var patrn=/^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/;
const isvalid = patrn.exec(s)
```
-3.

### 20.4补充
#### 20.4.1
- 只要引入集合区间和通配符的方式就可以实现一对多的匹配了
- 在正则表达式里，集合的定义方式是使用中括号[和]
#### 20.4.2位置边界
- 1.单词边\b  boundary
- 2.字符串边界
#### 20.4.3子表达式
#### 20.4.3.1分组
  ()
#### 20.4.3.2回溯引用
回溯引用
所谓回溯引用（backreference）指的是模式的后面部分引用前面已经匹配到的子字符串。

回溯引用在替换字符串中十分常用，语法上有些许区别，用$1,$2...来引用要被替换的字符串。下面以js代码作演示：
```
var str = 'abc abc 123';
str.replace(/(ab)c/g,'$1g');
// 得到结果 'abg abg 123'
```
如果我们不想子表达式被引用，可以使用非捕获正则(?:regex)这样就可以避免浪费内存。
var str = 'scq000'.
str.replace(/(scq00)(?:0)/, '$1,$2')
// 返回scq00,$2
// 由于使用了非捕获正则，所以第二个引用没有值，这里直接替换为$2
有时，我们需要限制回溯引用的适用范围。那么通过前向查找和后向查找就可以达到这个目的。
#### 20.4.3.3
##### 20.4.3.3.1前向查找
前向查找(lookahead)是用来限制后缀的。**凡是以(?=regex)包含的子表达式在匹配过程中都会用来限制前面的表达式的匹配**。例如happy happily这两个单词，我想获得以happ开头的副词，那么就可以使用happ(?=ily)来匹配。如果我想过滤所有以happ开头的副词，那么也可以**采用负前向查找的正则happ(?!ily)**，就会匹配到happy单词的happ前缀。
##### 20.4.3.3.2后向查找
介绍完前向查找，接着我们再来介绍一下它的反向操作：后向查找(lookbehind)。后向查找(lookbehind)是通过指定一个子表达式，然后从符合这个子表达式的位置出发开始查找符合规则的字串。
```
/(?<=app)ple/
```
其中**(?<=regex)的语法就是我们这里要介绍的后向查找**。regex指代的子表达式会作为限制项进行匹配，匹配到这个子表达式后，就会继续向后查找。另外一种限制匹配是**利用(?<!regex) 语法，这里称为负后向查找**。与正前向查找不同的是，被指定的子表达式不能被匹配到。于是，在上面的例子中，如果想要查找apple的ple也可以这么写成/(?<!peo)ple。

最后回顾一下这部分内容：
|回溯查找|正则|记忆方式
|-|-|-|
|引用|\0,\1,\2 和 $0, $1, $2|转义+数字
|非捕获组|(?:)|引用表达式(()), 本身不被消费(?),引用(:)
|前向查找|(?=)|引用子表达式(())，本身不被消费(?), 正向的查找(=)
|前向负查找|(?!)|引用子表达式(())，本身不被消费(?), 负向的查找(!)
|后向查找|(?<=)|引用子表达式(())，本身不被消费(?), 后向的(<，开口往后)，正的查找(=)
|后向负查找|(?<!)|引用子表达式(())，本身不被消费(?), 后向的(<，开口往后)，负的查找(!)

#### 20.4.3.4逻辑处理
而非关系，分为两种情况：一种是字符匹配，另一种是子表达式匹配。
|逻辑关系|正则元字符
|-|-|
|与|无
|非|[^regex]和!
|或||
## 21说说你对DOM的理解，常见的操作有哪些？
下面就来分析DOM常见的操作，主要分为：
- 创建节点
- 查询节点
- 更新节点
- 添加节点
- 删除节点
### 21.1创建节点
- createElement
创建新元素，接受一个参数，即要创建元素的标签名
```
const divEl = document.createElement("div");
```
- createTextNode
创建一个文本节点
```
const textEl = document.createTextNode("content");

```
- createDocumentFragment
用来创建一个文档碎片，它表示一种轻量级的文档，主要是用来存储临时节点，然后把文档碎片的内容一次性添加到DOM中
```
const fragment = document.createDocumentFragment();
```
当请求把一个DocumentFragment 节点插入文档树时，插入的不是 DocumentFragment自身，而是它的所有子孙节点
- createAttribute
创建属性节点，可以是自定义属性
```
const dataAttribute = document.createAttribute('custom');
consle.log(dataAttribute);
```
### 21.2获取节点
- querySelector
传入任何有效的css 选择器，即可选中单个 DOM元素（首个）：
```
document.querySelector('.element')
document.querySelector('#element')
document.querySelector('div')
document.querySelector('[name="username"]')
document.querySelector('div + p > span')
```
如果页面上没有指定的元素时，返回 null
- querySelectorAll
返回一个包含节点子树内所有与之相匹配的Element节点列表，如果没有相匹配的，则返回一个空节点列表

const notLive = document.querySelectorAll("p");
需要注意的是，该方法返回的是一个 NodeList的静态实例，它是一个静态的“快照”，而非“实时”的查询

关于获取DOM元素的方法还有如下，就不一一述说
```
document.getElementById('id属性值');返回拥有指定id的对象的引用
document.getElementsByClassName('class属性值');返回拥有指定class的对象集合
document.getElementsByTagName('标签名');返回拥有指定标签名的对象集合
document.getElementsByName('name属性值'); 返回拥有指定名称的对象结合
document/element.querySelector('CSS选择器');  仅返回第一个匹配的元素
document/element.querySelectorAll('CSS选择器');   返回所有匹配的元素
document.documentElement;  获取页面中的HTML标签
document.body; 获取页面中的BODY标签
document.all[''];  获取页面中的所有元素节点的对象集合型
```
除此之外，每个DOM元素还有parentNode、childNodes、firstChild、lastChild、nextSibling、previousSibling
### 21.3更新节点
- innerHTML
不但可以修改一个DOM节点的文本内容，还可以直接通过HTML片段修改DOM节点内部的子树
```
// 获取<p id="p">...</p>
var p = document.getElementById('p');
// 设置文本为abc:
p.innerHTML = 'ABC'; // <p id="p">ABC</p>
// 设置HTML:
p.innerHTML = 'ABC <span style="color:red">RED</span> XYZ';
// <p>...</p>的内部结构已修改
```
- innerText、textContent
自动对字符串进行HTML编码，保证无法设置任何HTML标签
```
// 获取<p id="p-id">...</p>
var p = document.getElementById('p-id');
// 设置文本:
p.innerText = '<script>alert("Hi")</script>';
// HTML被自动编码，无法设置一个<script>节点:
// <p id="p-id">&lt;script&gt;alert("Hi")&lt;/script&gt;</p>
两者的区别在于读取属性时，innerText不返回隐藏元素的文本，而textContent返回所有文本
```
- style
DOM节点的style属性对应所有的CSS，可以直接获取或设置。遇到-需要转化为驼峰命名
```
// 获取<p id="p-id">...</p>
const p = document.getElementById('p-id');
// 设置CSS:
p.style.color = '#ff0000';
p.style.fontSize = '20px'; // 驼峰命名
p.style.paddingTop = '2em';
```
### 21.4添加节点
- innerHTML
如果这个DOM节点是空的，例如，<div></div>，那么，直接使用innerHTML = '<span>child</span>'就可以修改DOM节点的内容，相当于添加了新的DOM节点

如果这个DOM节点不是空的，那就不能这么做，因为innerHTML会直接替换掉原来的所有子节点
- appendChild
把一个子节点添加到父节点的最后一个子节点
- insertBefore
把子节点插入到指定的位置，使用方法如下：
```
parentElement.insertBefore(newElement, referenceElement)
```
子节点会插入到referenceElement之前
- setAttribute
在指定元素中添加一个属性节点，如果元素中已有该属性改变属性值
```
const div = document.getElementById('id')
div.setAttribute('class', 'white');//第一个参数属性名，第二个参数属性值。
```
### 21.5删除节点
删除一个节点，首先要获得该节点本身以及它的父节点，然后，调用父节点的removeChild把自己删掉

**删除后的节点虽然不在文档树中了，但其实它还在内存中，可以随时再次被添加到别的位置**
## 22说说你对BOM的理解，常见的BOM对象你了解哪些？
### 22.1window
关于窗口控制方法如下：
- moveBy(x,y)：从当前位置水平移动窗体x个像素，垂直移动窗体y个像素，x为负数，将向左移动窗体，y为负数，将向上移动窗体
- moveTo(x,y)：移动窗体左上角到相对于屏幕左上角的(x,y)点
- resizeBy(w,h)：相对窗体当前的大小，宽度调整w个像素，高度调整h个像素。如果参数为负值，将缩小窗体，反之扩大窗体
- resizeTo(w,h)：把窗体宽度调整为w个像素，高度调整为h个像素
- scrollTo(x,y)：如果有滚动条，将横向滚动条移动到相对于窗体宽度为x个像素的位置，将纵向滚动条移动到相对于窗体高度为y个像素的位置
scrollBy(x,y)：如果有滚动条，将横向滚动条向左移动x个像素，将纵向滚动条向下移动y个像素


- window.open() 既可以导航到一个特定的url，也可以打开一个新的浏览器窗口

- window.close() 仅用于通过 window.open() 打开的窗口
### 22.2location
location属性描述如下：
|属性名	|例子	|说明
|-|-|-|
|hash	|"#contents"	|utl中#后面的字符，没有则返回空串
|host|	www.wrox.com:80	|服务器名称和端口号
|hostname	|www.wrox.com	|域名，不带端口号
|href	http://www.wrox.com:80/WileyCDA/?q=javascript#contents	|完整url
|pathname	|"/WileyCDA/"|	服务器下面的文件路径
|port	|80	|url的端口号，没有则为空
|protocol|	http:	|使用的协议
|search	|?q=javascript	|url的查询字符串，通常为？后面的内容

location.reload()，此方法可以重新刷新当前页面。这个方法会根据最有效的方式刷新页面，如果页面自上一次请求以来没有改变过，页面就会从浏览器缓存中重新加载
### 22.3navigator
navigator 对象主要用来获取浏览器的属性，区分浏览器类型。
### 22.4screen
保存的纯粹是客户端能力信息，也就是浏览器窗口外面的客户端显示器的信息，比如像素宽度和像素高度
### 22.5history
history对象主要用来操作浏览器URL的历史记录，可以通过参数向前，向后，或者向指定URL跳转


history.go()
```
history.go('maixaofei.com')
history.go(3) //向前跳转三个记录
history.go(-1) //向后跳转一个记录
```
history.forword()
history.back()
history.length
## 23举例说明你对尾递归的理解，有哪些应用场景
尾递归在普通尾调用的基础上，多出了2个特征：
- 在尾部调用的是函数自身
- 可通过优化，使得计算仅占用常量栈空间
### 23.1应用场景
- 数组求和
```
function sum(arr, total) {
    if(arr.length === 1) {
        return total
    }
    return sum(arr, total + arr.pop())
}
```
- 使用尾递归优化求斐波那契数列
```
function factorial2 (n, start = 1, total = 1) {
    if(n <= 2){
        return total
    }
    return factorial2 (n -1, total, total + start)
}
```
- 数组扁平化
```
let a = [1,2,3, [1,2,3, [1,2,3]]]
// 变成
let a = [1,2,3,1,2,3,1,2,3]
// 具体实现
function flat(arr = [], result = []) {
    arr.forEach(v => {
        if(Array.isArray(v)) {
            result = result.concat(flat(v, []))
        }else {
            result.push(v)
        }
    })
    return result
}
```
- 数组对象格式化
```
let obj = {
    a: '1',
    b: {
        c: '2',
        D: {
            E: '3'
        }
    }
}
// 转化为如下：
let obj = {
    a: '1',
    b: {
        c: '2',
        d: {
            e: '3'
        }
    }
}

// 代码实现
function keysLower(obj) {
    let reg = new RegExp("([A-Z]+)", "g");
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let temp = obj[key];
            if (reg.test(key.toString())) {
                // 将修改后的属性名重新赋值给temp，并在对象obj内添加一个转换后的属性
                temp = obj[key.replace(reg, function (result) {
                    return result.toLowerCase()
                })] = obj[key];
                // 将之前大写的键属性删除
                delete obj[key];
            }
            // 如果属性是对象或者数组，重新执行函数
            if (typeof temp === 'object' || Object.prototype.toString.call(temp) === '[object Array]') {
                keysLower(temp);
            }
        }
    }
    return obj;
};
```
## 24说说 JavaScript 中内存泄漏的几种情况？
应用程序分配某段内存后，由于设计错误，导致在释放该段内存之前就失去了对该段内存的控制，从而造成了内存的浪费
### 24.1垃圾回收机制
通常情况下有两种实现方式：
- 标记清除:JavaScript最常用的垃圾收回机制
- 引用计数
### 24.2常见内存泄露情况
- 意外的全局变量
```
function foo(arg) {
    bar = "this is a hidden global variable";
}
```
- 另一种意外的全局变量可能由 this 创建：
```
function foo() {
    this.variable = "potential accidental global";
}
// foo 调用自己，this 指向了全局对象（window）
foo();
```
- 定时器也常会造成内存泄露
```
var someResource = getData();
setInterval(function() {
    var node = document.getElementById('Node');
    if(node) {
        // 处理 node 和 someResource
        node.innerHTML = JSON.stringify(someResource));
    }
}, 1000);
```
如果id为Node的元素从DOM中移除，该定时器仍会存在，同时，因为回调函数中包含对someResource的引用，定时器外面的someResource也不会被释放

- 包括我们之前所说的闭包，维持函数内局部变量，使其得不到释放
```
function bindEvent() {
  var obj = document.createElement('XXX');
  var unused = function () {
    console.log(obj, '闭包内引用obj obj不会被释放');
  };
  obj = null; // 解决方法
}
```
- 没有清理对DOM元素的引用同样造成内存泄露
```
const refA = document.getElementById('refA');
document.body.removeChild(refA); // dom删除了
console.log(refA, 'refA'); // 但是还存在引用能console出整个div 没有被回收
refA = null;
console.log(refA, 'refA'); // 解除引用
```
包括使用事件监听addEventListener监听的时候，在不监听的情况下使用removeEventListener取消对事件监听
## 25JavaScript中本地存储的方式有哪些？区别及应用场景？
javaScript本地缓存的方法我们主要讲述以下四种：

- cookie
- sessionStorage
- localStorage
- indexedDB
### 25.1cookie
4kb
cookie每次请求中都会被发送，如果不使用 HTTPS并对其加密，其保存的信息很容易被窃取，导致安全风险。
常用属性：
- Expires 用于设置 Cookie 的过期时间
```
Expires=Wed, 21 Oct 2015 07:28:00 GMT
```
- Max-Age 用于设置在 Cookie 失效之前需要经过的秒数（优先级比Expires高）
```
Max-Age=604800
```
- Domain指定了 Cookie 可以送达的主机名
- Path指定了一个 URL路径，这个路径必须出现在要请求的资源的路径中才可以发送 Cookie 首部
```
Path=/docs   # /docs/Web/ 下的资源会带 Cookie 首部
```
标记为 Secure的 Cookie只应通过被HTTPS协议加密过的请求发送给服务端


关于cookie的修改，首先要确定domain和path属性都是相同的才可以，其中有一个不同得时候都会创建出一个新的cookie
```
Set-Cookie:name=aa; domain=aa.net; path=/  # 服务端设置
document.cookie =name=bb; domain=aa.net; path=/  # 客户端设置
```
最后cookie的删除，最常用的方法就是给cookie设置一个过期的事件，这样cookie过期后会被浏览器删除

### 25.2localStorage
- 存储的信息在同一域中是共享的

- 设置
```
localStorage.setItem('username','cfangxu');
```
- 获取
```
localStorage.getItem('username')
```
- 获取键名
```
localStorage.key(0) //获取第一个键名
```
- 删除
```
localStorage.removeItem('username')
```
- 一次性清除所有存储
```
localStorage.clear()
```
localStorage 也不是完美的，它有两个缺点：

- 无法像Cookie一样设置过期时间
- 只能存入字符串，无法直接存对象
```
localStorage.setItem('key', {name: 'value'});
console.log(localStorage.getItem('key')); // '[object, Object]'
```

### 25.3indexedDB
- 储存量理论上没有上限
- 所有操作都是异步的，相比 LocalStorage 同步操作性能更
### 25.4区别
关于cookie、sessionStorage、localStorage三者的区别:
大小，有效时间
### 25.5应用场景
- 标记用户与跟踪用户行为的情况，推荐使用cookie
- 适合长期保存在本地的数据（令牌），推荐使用localStorage
- 敏感账号一次性登录，推荐使用sessionStorage
- 存储大量数据的情况、在线文档（富文本编辑器）保存编辑历史的情况，推荐使用indexedDB
## 26说说你对函数式编程的理解？优缺点？
- 主要的编程范式有三种：命令式编程，声明式编程和函数式编程

命令式编程：强调怎么做，关心过程
声明式编程：强调做什么，只关心结果

- 函数编程属于声明式编程范式
函数式编程两个基本的运算：合成和柯里化

纯函数

- compose执行是从右到左的。而管道函数，执行顺序是从左到右执行的


优缺点：
更好的状态管理，更简单的复用，等优雅的组合
缺点：性能，支援占用，递归
## 27JavaScript中如何实现函数缓存？有哪些应用场景？
- 函数缓存，就是将函数运算过的结果进行缓存
- 常用于缓存数据计算结果和缓存对象
- 实现函数缓存主要依靠闭包、柯里化、高阶函数
```
const memoize=function(fn,content){
    let cache=Object.create(null)
    content=content||this
    return (...key)=>{
        if(!cache[key]){
            cache[key]=fn.apply(content,key)
        }
        return cache[key]
    }
}
```
## 28说说 JavaScript 数字精度丢失的问题，解决方案？
javaScript存储方式是双精度浮点数，其长度为8个字节，即64位比特

64位比特又可分为三个部分：

- 符号位S：第 1 位是正负数符号位（sign），0代表正数，1代表负数
- 指数位E：中间的 11 位存储指数（exponent），用来表示次方数，可以为正负数。在双精度浮点数中，指数的固定偏移量为1023
- 尾数位M：最后的 52 位是尾数（mantissa），超出的部分自动进一舍零
---
存储二进制时小数点的偏移量最大为52位，最多可以表达的位数是2^53=9007199254740992，对应科学计数尾数是 9.007199254740992，这也是 JS 最多能表示的精度
---
最大可以表示的整数是 2^1024 - 1

## 29说说函数节流和防抖？有什么区别？如何实现？
- 本质上是优化高频率执行代码的一种手段
  
- 节流: n 秒内只运行一次，若在 n 秒内重复触发，只有一次执行
- 防抖: n 秒后在执行该事件，若在 n 秒内被重复触发，则重新计时

节流
function throttle(fn,delay){
    let oldTime=new Date()
    return (...args)=>{
        let newTime=new Date()
        if(newTime-oldTime>=delay){
            fn.apply(null,args)
            oldTime=new Date()
        }
    }
}
function throttle(fn,delay=500){
    let time=null
    return (..args)=>{
        if(!time){
           time= setTimeout(()=>{
                fn.apply(null,args)   
                time=null 
            },delay)    
        }
    }   
}
防抖
function debounce(fn,delay){
    let time=null
    return (..args)=>{
        if(time)clearTimeOut(time)
        time=setTimeout(()=>{
            fn(args)
            time=0
        },delay)
    }
}
### 29.1应用场景
防抖在连续的事件，只需触发一次回调的场景有：

- 搜索框搜索输入。只需用户最后一次输入完，再发送请求
- 手机号、邮箱验证输入检测
- 窗口大小resize。只需窗口调整完成后，计算窗口大小。防止重复渲染。

节流在间隔一段时间执行一次回调的场景有：

- 滚动加载，加载更多或滚到底部监听
- 搜索框，搜索联想功能
## 30JavaScript如何判断一个元素是否在可视区域中？
- 图片的懒加载
- 列表的无限滚动
- 计算广告元素的曝光情况
- 可点击链接的预加载
## 31JavaScript如何实现上拉加载，下拉刷新？
上拉加载
- scrollTop：滚动视窗的高度距离window顶部的距离，它会随着往上滚动而不断增加，初始值是0，它是一个变化的值

- clientHeight:它是一个定值，表示屏幕可视区域的高度；

- scrollHeight：页面不能滚动时是不存在的，body长度超过window时才会出现，所表示body所有元素的长度

下拉刷新

从上面可以看到，在下拉到松手的过程中，经历了三个阶段：

- 当前手势滑动位置与初始位置差值大于零时，提示正在进行下拉刷新操作
- 下拉到一定值时，显示松手释放后的操作提示
- 下拉到达设定最大值松手时，执行回调，提示正在进行更新操作
## 32大文件上传如何做断点续传？
上传大文件时，以下几个变量会影响我们的用户体验

- 服务器处理数据的能力
- 请求超时
- 网络波动

分片上传

断点续传
一般实现方式有两种：

- 服务器端返回，告知从哪开始
- 浏览器端自行处理
### 32.1使用场景

- 大文件加速上传：当文件大小超过预期大小时，使用分片上传可实现并行上传多个 Part， 以加快上传速度
- 网络环境较差：建议使用分片上传。当出现上传失败的时候，仅需重传失败的Part
- 流式上传：可以在需要上传的文件大小还不确定的情况下开始上传。这种场景在视频监控等行业应用中比较常见
### 32.2
我们还需要考虑到更多场景，比如

- 切片上传失败怎么办
- 上传过程中刷新页面怎么办
- 如何进行并行上传
- 切片什么时候按数量切，什么时候按大小切
- 如何结合 Web Work 处理大文件上传
- 如何实现秒传
## 33什么是单点登录？如何实现？
单点登录（Single Sign On），简称为 SSO，是目前比较流行的企业业务整合的解决方案之一

- 同域名下的单点登录
cookie的domin属性设置为当前域的父域，并且父域的cookie会被子域所共享。path设置为根路径

- 用户登录成功之后，会与sso认证中心及各个子系统建立会话，用户与sso认证中心建立的会话称为全局会话

- 用户与各个子系统建立的会话称为局部会话，局部会话建立之后，用户访问子系统受保护资源将不再通过sso认证中心

全局会话与局部会话有如下约束关系：

- 局部会话存在，全局会话一定存在
- 全局会话存在，局部会话不一定存在
- 全局会话销毁，局部会话必须销毁
## 34web常见的攻击方式有哪些？如何防御？
我们常见的Web攻击方式有

- XSS (Cross Site Scripting) 跨站脚本攻击
- CSRF（Cross-site request forgery）跨站请求伪造
- SQL注入攻击
### 34.1XXS
XSS，跨站脚本攻击，允许攻击者将恶意代码植入到提供给其它用户使用的页面中

XSS涉及到三方，即攻击者、客户端与Web应用

**XSS的攻击目标是为了盗取存储在客户端的cookie或者其他网站用于识别客户端身份的敏感信息。一旦获取到合法用户的信息后，攻击者甚至可以假冒合法用户与网站进行交互**

根据攻击的来源，XSS攻击可以分成：

- 存储型
- 反射型
- DOM 型
  
- 反射型 XSS 跟存储型 XSS 的区别是：存储型 XSS 的恶意代码存在数据库里，反射型 XSS 的恶意代码存在 URL 里。

- DOM 型 XSS 跟前两种 XSS 的区别：DOM 型 XSS 攻击中，取出和执行恶意代码由浏览器端完成，属于前端 JavaScript 自身的安全漏洞，而其他两种 XSS 都属于服务端的安全漏洞


XSS攻击的两大要素：

- 攻击者提交而恶意代码
- 浏览器执行恶意代码

在使用 .innerHTML、.outerHTML、document.write() 时要特别小心，不要把不可信的数据作为 HTML 插到页面上，而应尽量使用 .textContent、.setAttribute() 等

如果用 Vue/React 技术栈，并且不使用 v-html/dangerouslySetInnerHTML 功能，就在前端 render 阶段避免 innerHTML、outerHTML 的 XSS 隐患

DOM 中的内联事件监听器，如 location、onclick、onerror、onload、onmouseover 等，<a> 标签的 href 属性，JavaScript 的 eval()、setTimeout()、setInterval() 等，都能把字符串作为代码运行。
### 34.2CSRF
CSRF（Cross-site request forgery）跨站请求伪造：攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求
### 34.3CSRF
Sql 注入攻击，是通过将恶意的 Sql查询或添加语句插入到应用的输入参数中，再在后台 Sql服务器上解析执行进行的攻击