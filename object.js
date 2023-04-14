// console.log("Object")

// Object clone
 // let clone = Object.create(
//     Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj)
//   );




// 1. Write a JavaScript program to list the properties of a JavaScript object.
let student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

// for(key in student){
//     console.log(`${key} : ${student[key]}`);
// }


// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

// delete student.rollno;

// console.log(student.rollno)

// console.log(student);

// let clone = structuredClone(student);
// console.log(clone===student)
// console.log(clone)





// 3. Write a JavaScript program to get the length of a JavaScript object.

// let length = 0;
// for(key in student) 
//     {
//         if(student.hasOwnProperty(key))length+=1;
//     }
// console.log(length)


function objectLength(obj) {
    return Object.keys(obj).length;
}

// console.log(objectLength(student))


// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
let library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];


function displayStatus(bookDetails) {
    bookDetails.forEach(element => {
        console.log(`${element.author} : ${element.title} : ${element.readingStatus}`);
    });


}

// displayStatus(library);


// 5.  Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes

function Cylinder(height, diameter) {
    this.height = height;
    this.diameter = diameter;
}

Cylinder.prototype.Volume = function () {
    let radius = this.diameter / 2;
    return this.height * Math.PI * Math.pow(radius, 2);
}

let cyl = new Cylinder(7, 4);

// console.log('volume = ', cyl.Volume().toFixed(4));

// do{
//     cyl = Object.getPrototypeOf(cyl);
//     console.log(cyl);

// }while(cyl);

const myDate = new Date();
let object = myDate;

// do {
//   object = Object.getPrototypeOf(object);
//   console.log(object);
// } while (object);

// let obj = Object.getPrototypeOf(Object);
// console.log(obj)
// obj = Object.getPrototypeOf(obj);
// console.log(obj)
// obj = Object.getPrototypeOf(obj)
// console.log(obj)

// 6. Bubble sort

Array.prototype.bubbleSort = function () {

    let i = 0, j = 0;


    return this;
}

// console.log([6, 4, 0, 3, -2, 1].bubbleSort())



// Write a JavaScript program which returns a subset of a string.

String.prototype.sub_string = function () {

    let arr = [], chr = "";

    for (let i = 0; i < this.length; i++) {
        for (let j = i; j < this.length; j++) {
            chr += this[j];
            arr.push(chr);
        }
        chr = "";
    }
    return arr;
}
// console.log("dog".sub_string());


Date.prototype.clock = function () {
    // setInterval(function(){
    //     console.log(this.toLocaleTimeString([],{hour12:false}))
    // },1000);
    // console.log(this.toLocaleTimeString([],{hour12:false}));
    let self = this;
    setTimeout(function run() {
        let timer = self.getTime();
        timer+=1;
        console.log(self.setTime(timer))
        self.setTime(timer); 
        console.log(self.toLocaleTimeString([], { hour12: false }));
        
        setTimeout(run, 1000);
    }, 1000)
}

let date = new Date();
console.log(date.toLocaleTimeString([],{hour12:false}));

// date.clock()
// console.log(date.toLocaleTimeString([],{hour12:false})) 

function Circle(radius) {
    this.radius = radius;

    this.area = function () {
        return (Math.PI * this.radius * this.radius).toFixed(2);
    }

    this.perimeter = function () {
        return (2 * Math.PI * this.radius).toFixed(2);
    }
}

const user = new Circle(4);
// user.__proto__=Object
// console.log(user.area())
// console.log(user.perimeter())

let lib = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];

// console.log(Object.entries(lib).forEach((entry)=>
//     console.log(entry[1])))

// console.log(Object.keys(lib))

const ordered = lib.map((obj) => {
    let internalOrder = Object.keys(obj).sort((a, b) => {
        if (a > b) return 1;
        else if (a < b) return -1;
        else return 0;
    }).reduce((res, key) => {
        // console.log(res);
        res[key] = obj[key];
        return res;
    }, {});
    // console.log(obj)

    return internalOrder
}).sort((a, b) => {
    return a.libraryID - b.libraryID;
})
// console.log(ordered)


// var sort_by = function(field_name, reverse, initial){

//     var key = initial ?
//         function(x)
//               {
//                 return initial(x[field_name]);
//               } :
//         function(x) 
//               {
//                 return x[field_name];
//               };

//     reverse = !reverse ? 1 : -1;

//     return function (x, y) {
//         return x = key(x), y = key(y), reverse * ((x > y) - (y > x));
//       } ;
//  };


//  var newobj = lib.sort(sort_by('libraryID', true, parseInt));

//  console.log(newobj);

// function compare(a, b) {
//     return a.libraryID - b.libraryID;
// }
// console.log(lib.sort(compare))


// 13.

function all_properties(object){
    
    let protoProps = Object.getPrototypeOf(object);
    
    return Object.getOwnPropertyNames(object).concat(Object.getOwnPropertyNames(protoProps));

}

// console.log(all_properties(user))
// console.log(Object.getOwnPropertyNames(user))
