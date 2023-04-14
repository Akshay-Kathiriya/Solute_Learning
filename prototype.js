// animal has methods
// let animal = {
//     walk() {
//       if (!this.isSleeping) {
//         alert(`I walk`);
//       }
//     },
//     sleep() {
//       this.isSleeping = true;
//     }
//   };
  
//   let rabbit = {
//     name: "White Rabbit",
//     __proto__: animal
//   };
  
  // modifies rabbit.isSleeping
  // rabbit.sleep();
  // animal.sleep();
  
  // console.log(rabbit.isSleeping); // true
  // console.log(animal.isSleeping); // undefined (no such property in the prototype)
//   console.log(Object.getPrototypeOf(Object))
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(animal)))\

const arr = [1,23,4];

// console.log(arr.__proto__);
// console.log(Array.prototype === arr.__proto__)
// console.log(arr.[[Prototype]]);


const animal = {
  eats: true
};

const rabbit = Object.create(animal);

// console.log(rabbit.eats)
console.log(Object.getPrototypeOf(animal))
