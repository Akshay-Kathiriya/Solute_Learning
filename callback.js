function isOdd(num){
    return num%2==1;
}

function atLeastTwo(arr, callback){
    let count = 0;
    const res= arr.map(callback);
    for(item of res){
        if(item===true){
            count+=1;
        }
    }
    if(count>=2) return true;
    else return false;
}

// console.log(atLeastTwo([1,2,4,6,3,3],isOdd));

const input = [
    {
      name: "John",
      yearOfBirth: 1988,
      placeOfBirth: "New York",
    },
    {
      name: "Nancy",
      yearOfBirth: 1963,
      placeOfBirth: "New York",
    },
    {
      name: "John",
      yearOfBirth: 1980,
      placeOfBirth: "Toronto",
    },
  ];
  
  function groupBy(input, callback){
    const res = input.reduce((accumulator,currentVal)=>{
        const key = callback(currentVal);

        if(accumulator[key]){
            accumulator[key].push(currentVal);
        }else{
            accumulator[key] = [currentVal];
        }
        return accumulator;
    },{});
    return res;
  };
  // 1
  // console.log(groupBy(input, (t) => t.name));
  
  // // 2
  // console.log(groupBy(input, (t) => isOdd(t.yearOfBirth)));



function repeatRecursive(str, n, callback){
  if(n==0) return str;
  return repeatRecursive(callback(str),n-1,callback)
}

function repeat(str, n, callback){

    for(let i=0; i<n; i++){
      str = callback(str);
    }
    return str;
}

const exclaim = (str) => `${str}!`;
const doubleChars = (str) =>
  str
    .split("")
    .map((c) => `${c}${c}`)
    .join("");

console.log(repeat("triple",2,doubleChars)); 
console.log(repeat("infinite power",3,(t)=>`*${t}*`));
console.log(repeat("infinite power",3,exclaim));


