// console.log('' == '0' ,// false
// 0 == '' ,// true
// 0 == '0', // true

// false == 'false', // false
// false == '0' ,// true

// false == undefined ,// false
// false == null ,// false
// null == undefined ,// true

// ' \t\r\n' == 0 )// true
//console.log(2%'3')
//console.log('YongHuBianHao6ShuiBiaoBianHao'.search(/YongHuBianHao[2-9]ShuiBiaoBianHao/))
function* gen(x){
  try {
    var y = yield x + 2;
  } catch (e){
    console.log(e);
  }
  return y;
}

var g = gen(1);
g.next();
//g.throw('出错了');
// 出错了