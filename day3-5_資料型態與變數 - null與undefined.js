//大多數程式語言都有空值(null)的設定
//但js多了一種undefined

//共通點：
//typeof null只有一種值：null
//typeof undefined只有一種值：undefined

var a;
console.log(a); //undefined，尚未給值/未定義

var b = null;
console.log(b); //null，明確定義此變數無值

//透過Boolean()強制轉型時都會是false，但代表意義不同

console.log(undefined); //false，(此變數) 還沒有給值，所以不知道是什麼
console.log(null);      //false，(此變數可能曾經有值，可能沒有值) 現在沒有值

//透過Number()強制轉型的結果來印證

console.log(Number(undefined)); //NaN
console.log(Number(null));      //0

//非全域變數的情況下，undefined可以被作為變數名稱宣告

var undefined = 'test';
console.log(undefined)  //test