const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number);
});
console.log(numbers)


function sumAll(args) { // args is the name for the array
    let sum = 0;
  console.log( args)
    for (let arg of args) sum += arg;
  
    return sum;
  }

console.log(sumAll(1,2))