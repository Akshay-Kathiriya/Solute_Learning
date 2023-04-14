console.log("***** Strings ******")

// console.log(typeof('we'))
let is_string = (str)=>typeof(str) === 'string'

let is_Blank = (str)=>str==''&& str.length===0

let string_to_array= (str)=>str.split(' ')
let truncate_string = (str, n)=>{
    console.log(str.constructor===String)
    return str.slice(0,n)
}
// console.log(is_string([1, 2, 4, 0]));
// console.log(is_Blank(''));
// console.log(is_Blank('abc'))

// console.log(string_to_array("Robin Singh"));

// console.log(truncate_string("Robin Singh",4));


// let room = {
//     number: 23
//   };
  
//   let meetup = {
//     title: "Conference",
//     participants: [{name: "John"}, {name: "Alice"}],
//     place: room // meetup references room
//   };
  
//   room.occupiedBy = meetup; // room references meetup
  
//   console.log( JSON.stringify(meetup, function replacer(key, value) {
//     console.log(`${key}: ${value}`);
//     return (key == 'occupiedBy') ? undefined : value;
//   }));


  function ask(question, ...handlers) {
    let isYes = confirm(question);
  
    for(let handler of handlers) {
      if (handler.length == 0) {
        if (isYes) handler();
      } else {
        handler(isYes);
      }
    }
  
  }
  
  // for positive answer, both handlers are called
  // for negative answer, only the second one
  ask("Question?", () => alert('You said yes'), result => alert(result));