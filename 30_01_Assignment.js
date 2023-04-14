// 1. Find 2 ways to find if given number is odd or even with use of  '%'  operator.

function odd_even1(n) {
    //    console.log((n/2))
    if (parseInt(n / 2) * 2 === n) console.log("Given number is even.")
    else console.log("Given number is odd.")

}
// odd_even1(3)

function odd_even2(number) {
    let mask_number = 1;
    // console.log(temp&n)
    if (number & mask_number === 1) console.log("Given number is odd.")
    else console.log("Given number is even.")
}

// odd_even2(38)











// 2.Check If the given Number is armstrong or not.

function armstrong(number) {
    let number_clone = number;
    let result = 0;
    while (number_clone !== 0) {
        // console.log(res)
        result = result + Math.pow(number_clone % 10, 3);
        number_clone = parseInt(number_clone / 10);
    }
    // console.log(res)
    if (result === number) console.log("Given number is armstron");
    else console.log("Given number is not armstron.");
}
// armstrong(120)













// 3.In an Application admin wants to get notied via Email every last day of month. Write a code to check if the entered date is last date of month or not.

function check_last_first(date, check) {
    // let year = date.getFullYear();
    // let month = date.getMonth();
    // let day = new Date(year, month, 0).getDate();

    let nextDay = new Date(date);
    nextDay.setDate(date.getDate() + 1);
    if (check === 'last') {
         (nextDay.getDate() === 1) ? console.log("Last date.") :  console.log("Not Last date.");
    } else if (check === 'first') {
        (date.getDate() === 1) ? console.log("First Date.") : console.log("Not First date.")
    }
}

check_last_first(new Date(2023, 1, 29), 'last')

// 4.In step 3 instead of last day suppose admin wants Email at every 1st day of month.

check_last_first(new Date(2023, 2, 1), 'first')















// 5.Write a code to sort given array. [check with number data array as well as string data].

function sort_arr(arr) {
    arr.sort((a, b) => {
        if (a > b) return 1;
        else if (a < b) return -1;
        else return 0;
    })
    return arr;
}

let arr1 = [1, 2, 8, 3, 6, 4, 5]
let arr2 = ['Ram', 'Shyam', 'Chagan', 'Magan']

// console.log(arr1.sort())
// console.log(arr2.sort())

// console.log(sort_arr(arr1))
// console.log(sort_arr(arr2))















// 6. let date = new Date();
// i) manipulate date variable and print only date in this format '30-01-2022'
// ii) manipulate date variable and print only date in this format '30/01/2022'
// iii) June 25, 2020 (Thur);

let date = new Date();

function format_1(date, str) {
    if (str === '/')
        return date.toLocaleDateString('en-GB')
    else if (str === '-')
        return date.toLocaleDateString('es-CL')
}

// let manip_1 = (date) => {
//     return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
// }

// let manip_2 = (date) => {
//     return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
// }

function format_3(date) {
    let days = ['Sund', 'Mond', 'Tues', 'Wedn', 'Thur', 'Frid', 'Satu'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augest', 'September', 'Octomber', 'November', 'December']

    return `${months[date.getMonth()]} ${date.getDate()},${date.getFullYear()} (${days[date.getDay()]})`
}

// console.log(format_1(new Date(), '/'))
// console.log(format_1(new Date(), '-'))
console.log(format_3(new Date(2020, 5, 25)))

















// 7. Lets say we have an array arr = [1,40,3,42] divide it into two arrays in a manner where some of both arrays will be equal . in above example  arr1 = [1,42], arr2 = [40,3]  and print sum = 43; return -1
// if given array can't be divided into two arrays which has same sum. 

// let is_Divisible_arr = (arr)=>{

//     let len = arr.length;
//     let i=0,j=1,k=1;
//     let sum = 0;
//     let arr1=[],arr2=[];

//     for(let i=0; i<arr.length; i++){
//         sum+=arr[i];
//     }

//     if(sum%2!=0) {
//         console.log(-1);
//         return;
//     }
//     let val = sum/2;
//     let tsum = arr[i];
//     while(i<j && j<=len){

//         if(tsum==val) break;

//         else if(tsum<val){
//             tsum+=arr[j++];
//         }

//         else{
//             while(k<j && tsum>val){
//                 tsum-=arr[k++];
//                 if(tsum==val) break;
//             }
//             if(k>=j) i++;
//         }
//     }
//     if(tsum==val){
//         arr1 = [arr[i]].concat(arr.slice(k,j));
//         arr2 = arr.slice(i+1,k).concat(arr.slice(j,len));
//         console.log(arr1);
//         console.log(arr2);
//     }else{
//         console.log(-1);
//     }

// }

function sum(arr) {
    let sum = 0;
    for (let n of arr) {
        sum += n;
    }
    return sum;
}

function is_Divisible_arr(arr) {
    let arr1 = [];
    let arr2 = [];

    arr.sort();
    // console.log(arr)

    for (let i = 0; i < arr.length; i++) {
        if (sum(arr1) <= sum(arr2)) {
            arr1.push(arr[i]);
        } else {
            arr2.push(arr[i]);
        }
    }

    if (sum(arr1) == sum(arr2)) {
        console.log(arr1);
        console.log(arr2);
    }
    else {
        console.log(-1);
    }
}

// let array = [1, 40, 3, 42]
// let arr5 = [7,2,2,1,8]
// let arr4 = [0,8,2,12,4,1,12,6,9,1,3,5,13,3]
// is_Divisible_arr(array); 