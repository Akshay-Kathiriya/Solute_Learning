// class User{
//     constructor(name){
//         this.name = name;
//     }   
//     sayHi(){console.log(this.name)}
// }

// const u1 = new User('akshat');
// console.log(u1.__proto__)
// console.log(User.prototype)
// console.log(typeof User.__proto__)
// console.log(typeof User);
// console.log(typeof u1);


class User {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short.");
      return;
    }
    this._name = value;
  }
}

let user = new User("John");
// console.log(user._name);

// user = new User("x");
// user.name = 'x'
// console.log(user._name)

// console.log(Date.prototype.__proto__==Object.prototype);  

// class Animal{}
// class Rabbit extends Animal {}

// console.log(Animal);
// console.log(typeof Rabbit); //function

// console.log(Rabbit.__proto__===Animal); //true
// console.log(Rabbit.prototype.__proto__ === Animal) //false
// console.log((new Rabbit()).__proto__===Animal.prototype) //false

// console.log(Animal.prototype);
// console.log(Animal.__proto__)
// console.log(Object.__proto__)
// console.log(Rabbit.__proto__)
// console.log(Animal.__proto__.prototype);
// console.log(Animal.prototype.__proto__)
// console.log(Rabbit.__proto__.prototype);
// console.log(Rabbit.prototype.__proto__);

// console.log(Animal.__proto__===Object.__proto__);//true;
// console.log(Rabbit.__proto__===Animal.__proto__)//false;
// console.log(Rabbit.__proto__===Object.__proto__)//false;
// console.log(Rabbit.__proto__===Animal.prototype)//false
// console.log(Rabbit.__proto__===Animal.__proto__.prototype)//false
// console.log(Rabbit.__proto__.prototype===Animal.__proto__)//false
// console.log(Rabbit.prototype.__proto__===Animal.__proto__)//false
// console.log(Rabbit.prototype.__proto__===Animal.__proto__)//false

// console.log(Rabbit.prototype.__proto__===Animal.prototype)

// let date = new Date();
// console.log(Date.now)

class Clock {
  name = 'akshsy'
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}
class ExtendedClock extends Clock {
  constructor(options) {
    super(options);
    let { precision = 1000 } = options;
    this.precision = precision;
  
  }
  // start() {
  //   this.render();
  //   this.timer = setInterval(() => this.render(), this.precision);
  // }
};

let clock = new Clock({template:'h:m:s'});
// clock.start();
// clock.stop() 


let lowResolutionClock = new ExtendedClock({
  template: 'h:m:s',
  precision: 1000
});

// console.log(Object.getOwnPropertyNames(Clock.prototype));
// console.log(Object.getOwnPropertyNames(ExtendedClock.__proto__));


// lowResolutionClock.start();
// lowResolutionClock.stop()

const obj1 = {
  foo: 1
}
const obj2 = {
  bar: 2
}
const obj3 = {
  bax: 3
}
const merged = Object.assign({}, obj1, obj2, obj3);

// console.log(merged)

// 1]
// class Animal{
//   constructor(type, name){
//     this.type = type ;
//     this.name = name;
//   }
// }

// const anim1 = new Animal('xtype', 'Cow');
// const anim2 = new Animal('ytype','lion');

// console.log(anim1.name+ " is of" + anim1.type);
// console.log(anim2.name+ " is of " + anim2.type);

// anim1.name = 'Horse';
// console.log(anim1.name);




// 2]

class Student{
  constructor(name, major, grades){
    this.name = name;
    this.major = major;
    this.grades = [...grades];
  }

  addGrade(grade){
    this.grades.push(grade);
  }

  gpa(){
    const sum = this.grades.reduce(function(sum,grade){
      return sum+=grade;
    },0);
    return (sum/(this.grades.length)).toFixed(2);
  }


}

// const eva = new Student("Eva", "Arts", [95,75,83]);

// console.log(eva);
// // eva.addGrade(89)
// console.log(eva.gpa())


// 3]
class Bookstore{
  constructor(books){
    this.books = [...books];
  }

  listBooks(){
    for(const book of this.books){
      book.displayBook();
    }
  }


}

class Book{
  constructor(name, author){
    this.name = name;
    this.author = author;
  }

  displayBook(){
    console.log(this.name+ " written by "+ this.author);
  }



}

// const nineteen84 = new Book('1984', "George Orwell");
const hp = new Book("Harry Potter", "J.K. Rowling");
// const bookstore = new Bookstore([nineteen84, hp]);

// bookstore.listBooks();




// 1]

class FancyArray extends Array{


    mapWithLogging(callback, thisArgs = this){
      let resultArray = new FancyArray();
      let i =0;
      for(const item of thisArgs){
        const mappedItem = callback(item,i++,thisArgs);
        resultArray.push(mappedItem);
        console.log(`Current: ${item}, After Callback: ${mappedItem}`);
      }
      return resultArray;
    }
}

// const arr = new FancyArray();
// console.log(arr);
// arr.push(1);
// arr.push(2);
// arr.push(3);

// const mapped = arr.mapWithLogging((item, i)=>{
//   return item+i;
// });

// console.log(mapped)


// warmup exercise
// 1]

class Vehicle{
  constructor(name, maxSpeed){
    this.name = name;
    this.maxSpeed = maxSpeed;
  }

  getMaxSpeed(){
    return this.maxSpeed;
  }
}

class Spaceship extends Vehicle{
    constructor(name, maxSpeed, numRocketEngines){
      super(name, maxSpeed);
      this.numRocketEngines = numRocketEngines;
    }
}

// const spaceship = new Spaceship("Enterprise", 1000, 2);
// console.log(spaceship.getMaxSpeed());
// console.log(spaceship.numRocketEngines);

class Shape{

  type = 'Shape';
  constructor(colour='Transparent'){
    this.colour = colour;
  }

  describe(){
    console.log(`A ${this.colour} ${this.type}`);
  }

}

class Square extends Shape{
  
  type = 'Square';
  constructor(colour, sideLength){
    super(colour);
    this.sideLength = sideLength;
  }
  
  area(){
    return (this.sideLength*this.sideLength);
  }
}

class Rectangle extends Shape{
  type = 'Rectangle';
  constructor(colour, width, height){
    super(colour);
    this.width = width;
    this.height = height;
  }

  area(){
    return (this.width*this.height);
  }

}
// const square = new Square("blue", 5);
// const rectangle = new Rectangle("red", 5, 6);
// console.log( square.area() ); // 25
// console.log( rectangle.area() ); // 30

// for (const shape of [square, rectangle] ){
//   shape.describe();
// }


class Circle extends Shape{

  constructor(colour, radius){
   super(colour);
    this.radius = radius;
    this.type = 'Circle'
  }

  area(){
    return Math.PI.toFixed(4)*this.radius*this.radius;
  }

  describe(){
    console.log(`A round and awesome ${this.colour} ${this.type}`);
  }

  
}

// const square = new Square("blue", 5);
// const rectangle = new Rectangle("red", 5, 6);
// const circle = new Circle("green", 3);
// console.log( square.area() ); // 25
// console.log( rectangle.area() ); // 30
// console.log( circle.area() ); // 28.27433
// for ( const shape of [square, rectangle, circle] ) {
//  shape.describe();
// }







