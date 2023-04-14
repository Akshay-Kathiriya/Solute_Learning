// const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>resolve("Hello world."),2000);
// });

// promise.then((data)=>{
//     console.log(data);
//     throw new Erorr('we reject it.');
// },(err)=>{
//     console.log(err);
// }).then((data)=>{
//     console.log(data);    
// },(err)=>{
//     console.log(err);
// })

// console.log(typeof 1)










// const promise = job1();

// promise

// .then(function(data1) {
//     console.log('data1', data1);
//     return job2();
// })

// .then(function(data2) {
//     console.log('data2', data2);
//     return 'Hello world';
// })

// .then(function(data3) {
//     console.log('data3', data3);
// })
// .then((data)=>{
//     console.log(data);
// })

// function job1() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve('result of job 1');
//         }, 1000);
//     });
// }

// function job2() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve('result of job 2');
//         }, 1000);
//     });
// }




// function test(){
//     return job1()
//     .then(function(){return job2();})
//     .then(function(){return job3();})
//     .then(function(){return job4();})
//     .then(function(){return doSomething()});
// }










// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true);

// promise

// .then(function(data) {
//     console.log(data);

//     return job(false);
// })

// .catch(function(error) {
//     console.log(error);

//     return 'Error caught';
// })

// .then(function(data) {
//     console.log(data);

//     return job(true);
// })

// .catch(function(error) {
//     console.log(error);
// });



// function job(delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(function(){
//             console.log("Resolving ", delay);
//             resolve('done ' + delay);
//         },delay);
//     })
// }

// const promise = Promise.all([job(1000),job(2000), job(500),job(1500)]);

// promise.then(function(data){
//     console.log("All done");
//     data.forEach(function(text){
//         console.log(text);
//     })
// })



// console.log(new Promise((resolve, reject)=>resolve()).then(()=>{}));


// let obj1 = {'name':1,'name2':2};
// let obj2 = {'fname':'fname','lname':'lname','email':'email'};
// let obj3 = {};
// Object.assign(obj3,obj1,obj2);
// console.log(obj3)
// console.log(obj1+obj2);












// let central = require('./central'),
//     db1 = require('./db1'),
//     db2 = require('./db2'),
//     db3 = require('./db3'),
//     vault = require('./vault'),
//     mark = require('./mark');

// module.exports = function(id) {
//     // TODO
//     // Reminder: The deadline is tomorrow !
//     return  new Promise((resolve,reject)=>{
//         setTimeout((id)=>{if(['db1','db2','db3'].includes(central(id))){
//            resolve(central(id));
//         }else{
//             reject("Error central");
//         }},100)
//     })
//     .then(function(db){
//         return new Promise((resolve, reject)=>{
//             setTimeout((db)=>{if(db(id)){
//                 resolve(db(id));
//             }else{
//                 reject(`Error ${db}`);
//             }},100)
//         })
//     })
//     .then((data1)=>{
//         return new Promise((resolve, reject)=>{

//            setTimeout((data1)=>{ if(vault(id)){
//                 const obj = {};
//                 Object.assign(obj, data1, vault(id))
//                 resolve(obj);
//             }else{
//                 reject(`Error vault`);
//             }},150);
//         })
//     }).then((details)=>{
//         return details;
//     }).catch((error)=>error);
// };


// let central = require('./central'),
//     db1 = require('./db1'),
//     db2 = require('./db2'),
//     db3 = require('./db3'),
//     vault = require('./vault'),
//     mark = require('./mark');

// Solution hidden. Unfold this block to see it.
// module.exports = function(id) { // autofold
//     let dbs = {
//         db1: db1,
//         db2: db2,
//         db3: db3
//     };

//     return new Promise(function(resolve, reject) {
//         Promise.all([
//             central(id)

//             .catch(function() {
//                 return Promise.reject('Error central');
//             })

//             .then(function(db) {
//                 return dbs[db](id)

//                 .catch(function() {
//                     return Promise.reject('Error ' + db);
//                 });
//             }),

//             vault(id)

//             .catch(function() {
//                 return Promise.reject('Error vault');
//             })
//         ])

//         .then(function(data) {
//             mark(id).catch(function() {});

//             resolve({
//                 id: id,
//                 username: data[0].username,
//                 country: data[0].country,
//                 firstname: data[1].firstname,
//                 lastname: data[1].lastname,
//                 email: data[1].email
//             });
//         })

//         .catch(function(error) {
//             reject(error);
//         });
//     });
// };


function job() {
  return 'Hello world';
}

async function main() {
  let message = await job();

  return (message);
}

const message = main();
// console.log(message instanceof Promise);

// console.log(new Promise())

const a = [1, 2, 3, 4];
const b = [1, 2, 3, 4];

// console.log(a === b);




// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
//   });

// .catch(f) is the same as promise.then(null, f)
//   promise.then(()=>{}).catch(console.log); 




// new Promise((resolve, reject) => {
//     throw new Error("error");
//   }).then(()=>{},(err)=>{console.log(err)})
//     .catch(err => console.log(err))
//     .finally(() => console.log("Promise ready"));

// async function f() {

//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 5000)
//   });

//   let result = await promise; // wait until the promise resolves (*)

//   console.log(result); // "done!"
// }

// f();
// console.log("print")




function callback2(value=0){
  console.log("callback2 " , value);
}

function callback1(val, callback) {
  console.log("Inside cb1 ", val)
  let promise = new Promise(function(resolve,reject){setTimeout(function () {
    console.log(`inside cb1 timout`);
    resolve(1115);
  }, 3000)})

  promise.then((data,err)=>{
    callback(data)
  });
}

callback1(1, callback2);

var var1 = 10;
(()=>{
  console.log('hhhg',var1);

  var2 =100;
  console.log(var2);

  let var2 = 30;
  console.log(var2);

  var2 = 200;
  console.log(var2);
})();

console.log(var1);
console.log(var2);











// var greeter = 'hello';

// function newFunction(){
//   var hello = 'hello';
//   var greeter = 'hi';
// }

// // if(true){
// //   var greeter = 'inside if'
// // }
// console.log(greeter);
// console.log(hello);


