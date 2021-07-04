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
- [4.](#4)
- [5.](#5)

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



## 4.
## 5.