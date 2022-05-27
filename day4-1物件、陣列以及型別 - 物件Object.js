// object的定義：「An object is a collection of properties and has a single prototype object.」

// 一個物件可以是個零至多種屬性的集合，而屬性是鍵 (key) 與值 (value) 之間的關聯。
// 一個屬性的「值」可以是某個基本型別，也可以是另一個物件，甚至可以是一個函數。
// 物件可以是瀏覽器預先定義好的，當然也可以是由自己定義物件的屬性與內容。

// 透過大括號{}來建立物件，也可以同時指定屬性至該物件內
// 這種方法稱為「物件實字(Object literal)」
// 同時也是JSON格式的核心語法
var person = {
    name: 'Kuro',
    job: 'Front-end developer',
    sayName: function () {
        console.log(this.name);
    }
};

// 屬性存取
// 物件的屬性可以透過.來存取

console.log(person.name);       //Kuro
console.log(person.job);        //Front-end developer
person.sayName();               //Kuro

// 也可以透過[]來進行存取

console.log(person['name']);    //Kuro

// 使用[]進行存取的好處：如果索引是不合法的識別字，執行不會出現錯誤

var test = {
    '001': 'Hello'
};

// console.log(test.001)        //這個會報錯：SyntaxError: Unexpected number
console.log(test['001'])        //Hello

// 新增屬性
// 直接用=指定

person.age = 30;
console.log(person.age);        //30

// 刪除屬性
// 透過delete來刪除

delete person.age;
console.log(person)             //沒有age了

// 判斷屬性是否存在
// 1.是否回傳undefined，但有可能屬性剛好是undefined
console.log(person.age);        //undefined
// 2.in運算子，會往上檢查物件的原型鍊(prototype chain)
console.log('age' in person);   //false
console.log('name' in person);  //true
console.log(person.hasOwnProperty('hasOwnProperty'));   //false
// 3.hasOwnProperty()，只會檢查物件本身有沒有存在這個屬性
console.log(person.hasOwnProperty('age'));  //false
console.log(person.hasOwnProperty('name')); //true
console.log('hasOwnProperty' in person);    //true