//https://ithelp.ithome.com.tw/articles/10190873

//變數一定要透過var宣告，否則會被認定為全域變數
var n = 1;

//變數的資料型別#1
//主要分別為基本型別(Primitives)與物件型別(Object)
//基本：string、number、boolean、null、undefine
//物件：其他的
console.log(typeof true);           //boolean
console.log(typeof 'TEST');         //string
console.log(typeof 123);            //number
console.log(typeof {});             //object
console.log(typeof []);             //object
console.log(typeof window.alert);   //function
console.log(typeof null);           //object    