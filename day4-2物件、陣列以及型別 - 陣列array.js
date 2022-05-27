// https://ithelp.ithome.com.tw/articles/10190962

// 可以看做一種特別的物件
// 為零或多個元素的集合，沒有規定可以放什麼東西進去，可以是資料類型、其他陣列、函式
// 有順序性的集合，只能透過[]存取
// 可以同時儲存不同資料類型，但通常不會這麼做

// 1.使用new來進行建立
var a = new Array();
a[0] = 'apple';
a[1] = 'ball';
a[2] = 'cat';
console.log(a);         //[ 'apple', 'ball', 'cat' ]

// 2.使用陣列實字來進行建立
var a = [];
a[0] = 'apple';
a[1] = 'ball';
a[2] = 'cat';
console.log(a);         //[ 'apple', 'ball', 'cat' ]

// 3.陣列實字的不同寫法
var a = ['apple', 'ball', 'cat'];
console.log(a);         //[ 'apple', 'ball', 'cat' ]
//以上三種都是一樣的結果

// 陣列長度使用.length來取的，而且是可被附寫的，會自動加入undefined進去

console.log(a.length);  //3
a.length = 10;
console.log(a.length);  //10
console.log(a);         // [ 'apple', 'ball', 'cat', <7 empty items> ]
console.log(a[9]);      // undefined

