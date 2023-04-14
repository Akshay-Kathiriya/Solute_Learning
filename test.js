console.log("Ready")

// var num = 9;
// var num = 10;
// console.log(num)


// fname = 'arshit'
// // lname = 'raj'

// var fname
// let lname 

// console.log(fname)
// console.log(lname)


function sayHi() {
    'use strict'
    console.log(name);
    console.log(age);
    var name = 'akshay'
    let age = 12
}

// sayHi()
// console.log(+true)
// console.log(!'ayush')

function sum(a, b) {
    return a + b;
}

// console.log(sum(1,'2'))

// String.prototype.giveAyushPizza=()=>{
//     return 'just give aush pizza';
// }

// const name='ayush';
// console.log(name.giveAyushPizza())
// console.log(name);

// console.log(typeof typeof 1)
// console.log(!!1)
// console.log([...'ayush'])
// function sum(...arguments){
//     return arguments.reduce((a, b) => a + b);
//   }

//   console.log(sum(1,2,3));


// function sum(arguments){
//     return arguments.reduce((a, b) => a + b);
//   }

//   console.log(sum([1,2,3]));

// console.log(1=='01')

// console.log(1 + +  1 + '1')
// console.log('1' + -  '1')
// let lang = 'javascript';
// (function(){
//    let lang = 'java';
//    console.log(lang)
// })();

// console.log(lang);

// (function(){
//     var lang2 = 'java';
//  })();


//  console.log(lang2);


// (function(){
//     console.log(typeof this);
//  })();

//  console.log(typeof Number)

// console.log("[ayushv.medium.com/](https://ayushv.medium.com/)" instanceof String);

// const s = new String('[ayushv.medium.com/](https://ayushv.medium.com/)');
// console.log(s instanceof String);

// const obj = {a:'one',b :'two', a:'three'}
// console.log(obj)

// let greeting;
// greetign = {}; // Typo!
// console.log(greetign);

function checkAge(data) {
    if (data === { age: 18 }) {
      console.log('You are an adult!');
    } else if (data == { age: 18 }) {
      console.log('You are still an adult.');
    } else {
      console.log(`Hmm.. You don't have an age I guess`);
    }
  }
  
//   checkAge({ age: 18 });

const a = {};
const b = { key: 'b' };
// const c = { key: 'c' };

// a[b] = 123;
// a[c] = 456;


// for(x in a){
//     console.log(x)
// }
// console.log(b)

// const arrtest = [1,2][2,2]
// console.log(arrtest)

// console.log(typeof([] + []));              
// console.log([1] + []);             
// console.log([1] + "abc");          
// console.log([1, 2, 3] + [1, 3, 4]);

// Question 38:
// Question 50: 

// const person = {
//     name: 'Ayush Verma',
//     .25e2: 25
// };
  
// for(i in person){
//     console.log(i)
// }
// console.log(person[25]);
// console.log(person[.25e2]);
// console.log(person['.25e2']);

// console.log(new Array(3).toString());

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
  
//   const ayush = new Person('Ayush', 'Verma');
//   const sarah = Person('Sarah', 'Smith');
  
//   console.log(ayush);
//   console.log(Person);


// let options = {
//   title: "Menu",
//   // width: 100,
//   // height: 200
// };

// let { width=100,title, height=200} = options;

// console.log(title);  // Menu
// console.log(width);  // 100
// console.log(height); // 200
// console.log(options.height)

let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) console.log(value);

// the same with forEach:
set.forEach((value, valueAgain, set) => {
  console.log(value);
});