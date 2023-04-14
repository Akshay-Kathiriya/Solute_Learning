
function is_array(arr) {
  // return Array.isArray(arr);
  // return (toString.call(arr)==='[object Array]')
  // console.log(Object.prototype.toString.call(arr))
  return (Object.prototype.toString.call(arr) === '[object Array]')
}

// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));








// 2. Write a JavaScript function to clone an array.

function array_Clone(arr) {
  // const arr_clone = [...arr];
  // const arr_clone = Array.from(arr);
  // const arr_clone = arr.map((i)=>i)
  const arr_clone = arr.filter(() => true)

  // console.log(arr_clone===arr);
  return arr_clone;
}

// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));









// Write a simple JavaScript program to join all elements of the following array into a string. 

function join_String(arr, seperator) {

  return arr.join(seperator);
}

// console.log(join_String(["Red", "Green", "White", "Black"],','))
// console.log(join_String(["Red", "Green", "White", "Black"],'+'))











// Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

function insert_dashesh_between_evenDigit(number) {

  //Method - 1.
  // const numberArray = number.toString();
  // const result = [numberArray[0]];

  // for(let i=0; i<numberArray.length-1; i++){
  //   if(numberArray[i]%2===0 && numberArray[i+1]%2==0)
  //     result.push('-',numberArray[i+1]);
  //   else
  //     result.push(numberArray[i+1]);
  // }
  //   return result.join("");

  //Method - 2.
  // const numberArray = Array.from(number.toString());

  // const result = numberArray.reduce((previousResult,current,index,arr)=>{

  //   // console.log(previousResult.slice(-1),Number(current))   
  //   // if(Number(previousResult.slice(-1))%2===0 && current%2===0)
  //   if(arr[index-1]%2===0 && current%2===0)
  //       return previousResult+"-"+current;
  //     else
  //       return previousResult+current;
  // })

  // return result;

  //Method - 3.
  // const numberArray = Array.from(number.toString());

  // const result = numberArray.map((item,index,arr)=>{
  //   // const resArr = [item];
  //   if(arr[index]%2===0 && arr[index+1]%2===0)
  //     return arr[index]+'-';
  //   else
  //     return arr[index];
  // })
  // return result.join("");

  //Method - 4.
  const numberArray = Array.from(number.toString());
  const result = [];
  numberArray.forEach((item, index, arr) => {
    if (item % 2 === 0 && arr[index + 1] % 2 === 0)
      result.push(item + '-');
    else result.push(item);
  })

  return result.join('')
}

// let str = 'abc';
// console.log(str.length)

// console.log(insert_dashesh_between_evenDigit('025468'));






// Write a JavaScript program to find the most frequent item of an array.

function mostFrequentItem(arr){

    // const map = new Map();
    // let maxValue=0;
    // let element = 0;
    // for(let i=0; i<arr.length; i++){ 
    //   if(map.has(arr[i])){
    //     map.set(arr[i],(map.get(arr[i])+1));
    //   }else{
    //     map.set(arr[i],1);
    //   }
    // }

    // map.forEach((val,key)=>{
    //   // console.log(map.get(key))
    //   if(map.get(key)>maxValue){
    //     maxValue = map.get(key);
    //     element = key;
    //   }
    // })

    // return `${element}:${maxValue}`

    const map = arr.reduce((sum,cur)=>{
       sum[cur]=(sum[cur]||0)+1;
       return sum;
    },{})
    
    const max = Math.max(...Object.values(map));
    for(let key in map){
      if(map[key]===max) return `${key} element ${max} times`
    }

}

// const arrTest1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
// console.log(mostFrequentItem(arrTest1))










// Write a JavaScript program which accept a string as input and swap the case of each character.

function swapTheCase(inputString){
      let stringArray = [...inputString];

      let resultArray = stringArray.map((char)=>{
        if(char===char.toUpperCase()){
          char=char.toLowerCase();
        }
        else {
          char = char.toUpperCase();
        }
        return char;
      })

      return resultArray.join('');
      
}

// console.log(swapTheCase('The Quick Brown Fox'));


// Write a JavaScript program to compute the sum and product of an array of integers.

function array_Sum_Product(arr){

  // let sum=0, product=1;
  //   arr.every((number)=>{
  //     return sum+=number;
  //   })
  //   arr.every((number)=>{
  //     return product*=number;
  //   })

  //   return `Sum is ${sum} and Product is ${product}`

    const sum_product = arr.reduce((obj,element)=>{
      if(obj.sum && obj.product){
        obj.sum+=element;
        obj.product*=element
      }else{
        obj.sum=element;
        obj.product=element;
      }
      return obj;
    },{})

    return sum_product;

}

// console.log(array_Sum_Product([1,2,3,4,5]))

// Q1
// https://leetcode.com/problems/container-with-most-water/

// https://leetcode.com/problems/spiral-matrix/

// Q2
function spiral_array(matrix){
      let result = [];

      let startCol = 0;
      let endCol = matrix[0].length-1;
      let startRow = 0;
      let endRow = matrix.length-1;
      let direction = 'right';

      while(startCol<=endCol && startRow<=endRow){
        if(direction==='right'){
          for(let i=startCol; i<=endCol; i++){
              result.push(matrix[startRow][i]);
          }
          startRow+=1;
          direction='down';
        }else if(direction==='down'){
          for(let i = startRow; i<=endRow; i++){
            result.push(matrix[i][endCol]);
          }
          endCol-=1;
          direction='left';
        }else if(direction==='left'){
          for(let i=endCol; i>=startCol; i-=1){
            result.push(matrix[endRow][i]);
          }
          endRow-=1;
          direction='up';
        }else if(direction==='up'){
          for(let i = endRow; i>=startRow; i-=1){
            result.push(matrix[i][startCol]);
          }
          startCol+=1;
          direction='right';
        }
      }

    return result;

}

console.log(spiral_array([[1,2,3],[4,5,6],[7,8,9]]))


// Q3

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
