// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     }
//           // ...
//       return confirm('Did parents allow you?');
    
//   }

// console.log(checkAge(19));


// function checkAge(age) {
//    return  (age > 18) || confirm('Did parents allow you?');
    
//   }

// checkAge(12);

// function power(x,y){
//     return Math.pow(x,y);
// }

// console.log(power(3,3));

// Write a JavaScript function that reverse a number
    // function reverse(n){
    //     // let y=0;
    //     // while(x/10!=0){
    //     //     y = y*10 + x%10
    //     //     x/=10;
    //     // }
    //     // return y;

    //     n = n + "";
    //     return n.split("").reverse().join("");
    // }
    // console.log(reverse(32243));


// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
        // for(let i=0; i<15; i++){
        //     if(i%2==0){
        //         console.log(i + " is even.")
        //     }else{
        //         console.log(i + " is odd.")
        //     }
        // }


// Write a JavaScript program to find the armstrong numbers of 3 digits.
// let ch;    
// for(let i=0; i<5; i++){
//         for(let j=0; j<i; j++){
//             ch = ch + "*";            
//         }
//         console.log(ch);
//         ch = '';
//     }

// let bool = true;
// console.log(typeof bool)


// let a = 0b11111111; 
// let b = 0o377; 

// console.log( a == b );
// console.log(0xff);

// console.log(0xff.toString(8));

let str = 'Widget with id';

// console.log( str.indexOf('Widget') );
// console.log(str.indexOf('id',2));
// console.log(str.lastIndexOf('w'));
// console.log(str.includes('wi',12));

// console.log(str.substring(2,6));
// console.log(str.substring(6,2));
// console.log(str.slice(2,6));
// console.log(str.slice(6,2));

// let fruits = ["Apple", "Orange", 'Plum'];
// console.log(fruits.at(1))

// console.log(fruits.pop())
// console.log(fruits.push('banana'))
// console.log(fruits.shift())
// console.log(fruits.unshift('mango'))
// console.log(fruits)

// var ch = '20'
// if(ch>10){
//     ch = ch*10;
// }
// console.log(typeof ch);

// let a ='abcd'
// if(a>10){
//     a = a*10;
// }

// let x = null
// let y = []
// // Array.isArray(y)
// console.log(y instanceof Array)
// console.log(a)
// console.log(typeof null)
// console.log(x === null)
// console.log(Object.is(x,null))

// console.log(Object.prototype.toString.call(y).slice(8,-1).toLowerCase()=='null')


// let arr = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
// arr.splice(arr.length, 0, 3, 4);

// console.log( arr ); // 1,2,3,4,5

// [1, -2, 15, 2, 0, 8].sort(function(a, b) {
//     console.log( a + " <> " + b );
//     return a - b;
//   });

// let arr = [1, 2, 3, 4, 5];

// let result = arr.reduce((sum, current) => sum + current, 0);

// console.log(result)

