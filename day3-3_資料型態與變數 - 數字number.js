//https://ithelp.ithome.com.tw/articles/10190873

//js只有一種數值的型別：number

var a = 1;
var b = -1;
var c = 1.1;
var d = Infinity;   //正數除以0
var e = -Infinity;  //負數除以0
var f = NaN;        //0除以0 或 Infinity除以Infinity 或 -Infinity除以-Infinity

//nan不是一個數字，但如果用typeof來判斷，會回傳number
//nan跟任何數字進行運算都會回傳nan，甚至是自己

console.log(typeof (NaN));  //number
console.log(NaN == NaN);    //false

//檢查一個變數是否為NaN：使用isNaN()來進行判斷
console.log(isNaN(NaN));    //true
console.log(isNaN('NaN'));  //true，因為字串NaN沒辦法轉成數字
console.log(isNaN(123));    //以下皆為false
console.log(isNaN('123'));  //因為字串'123'可以透過Number()轉成數字，有點類似python的作法

//因為js使用'二進位浮點數算數標準'，所以小數沒有辦法完美的計算，0.1 + 0.2 != 0.3
//詳細請google，這邊不細講

console.log(0.1 + 0.2 == 0.3)   //false

//為求數字精準的解法：
//easy：先處理成整數再計算，再轉回小數
//hard：number-precision
//https://github.com/nefe/number-precision