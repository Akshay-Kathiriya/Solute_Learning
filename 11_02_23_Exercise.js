// 1. Check if 2 arrays are same or not.
// const ar1 = [1,2,3,[4,3],5];
// const ar2 = [1,2,3,[4,3],5];

const ar1 = [1, 2, [3, 4], [1, [12, 3]], 5];

const ar2 = [1, 2, [1, [12, 3]], [3, 4], 5];


// try using flat and sort and jason.

// console.log(ar1==ar2)

// function sort(arr){
//     arr.sort((a,b)=>{
//         if(a>b) return 1;
//         else if(a<b) return -1;
//         else return 0;
//     })
// }
// function equalsCheck(arr1, arr2){
//     let compare1=arr1.flat(5);
//     let compare2 = arr2.flat(5);

//     sort(compare1);
//     sort(compare2);

//     return JSON.stringify(compare1)===JSON.stringify(compare2);

// }

const equalsCheck = (a, b) => {
    // If they point to the same instance of the array
    if (a === b)
        return true;

    // If they point to the same instance of date
    if (a instanceof Date && b instanceof Date)
        return a.getTime() === b.getTime();

    // If both of them are not null and their type is not an object
    if (!a || !b || (typeof a !== 'object' && typeof b !== 'object'))
        return a === b;

    // This means the elements are objects
    // If they are not the same type of objects
    if (a.prototype !== b.prototype)
        return false;

    // Check if both of the objects have the same number of keys
    const keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length)
        return false;

    // Check recursively for every key in both
    return keys.every(k => equalsCheck(a[k], b[k]));
};



const ignoreOrderCompare = (a, b) => {
    if (a.length !== b.length) return false;
    const elements = new Set([...a, ...b]);
    console.log(elements);
    for (const x of elements) {
        const count1 = a.filter(e => equalsCheck(e, x)).length;
        const count2 = b.filter(e => equalsCheck(e, x)).length;
        if (count1 !== count2) return false;
    }
    return true;
}

// console.log(ignoreOrderCompare(ar1,ar2));


// 2. Check if 2 objects are equal or not.

const one = {
    fruit: 'mango',
    nutrients: {
        energy: '255kJ',
        minerals: {
            name: 'calcium',
            temp: {
                value: 'temp',
            }
        },
    },
};

const two = {
    fruit: 'mango',
    nutrients: {
        energy: '255kJ',
        minerals: {
            name: 'calcium',
            temp: {
                value: 'temp',
            }
        },
    },
};

// 1.
function keySort(arr) {
    const ordered = arr.map((obj) => {
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
    });
    return { ordered };
}

function equalObjCheck(obj1, obj2) {

    obj1 = keySort([obj1]);
    obj2 = keySort([obj2]);
    return JSON.stringify(obj1) === JSON.stringify(obj2);

}
// console.log(ignoreOrderCompare([one],[two]));
// console.log(equalObjCheck(one,two));


// 2.

function isEqualObject(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length)
        return false;
    else {
        return Object.keys(obj1).every((key) => {
            return JSON.stringify(obj1[key]) === JSON.stringify(obj2[key])
        });
    }
}

console.log(isEqualObject(one, two));

// 3.  consider we have an array of object of size 30 for students from different school of type 
// students = [{
// id: number;
// name: string;
// collegeName: string;
// age: string;
// marks: number[];
// }]

let students = [
    {
        id: 1,
        name: 'Bhavin',
        collegeName: 'ADIT',
        age: '20',
        marks: [87, 80, 81, 82, 85]
    },

    {
        id: 2,
        name: 'Darvin',
        collegeName: 'BBIT',
        age: '23',
        marks: [79, 79, 79, 79, 99]
    },
    {
        id: 2,
        name: 'Darvin',
        collegeName: 'BBIT',
        age: '23',
        marks: [79, 79, 79, 79, 99]
    },
    {
        id: 3,
        name: 'KGF',
        collegeName: 'Nirma',
        age: '25',
        marks: [91, 92, 93, 94, 95]
    },
    {
        id: 4,
        name: 'Bhagat',
        collegeName: 'DDIT',
        age: '23',
        marks: [96, 97, 98, 99, 100]
    },
];



function sortArrObj(ele) {
    return ele.sort((s1, s2) => {
        if (s1.id > s2.id) return 1;
        else if (s1.id < s2.id) return -1;
        else 0;
    })
}

// i) remove duplicate entries(every property should be same not only name) for the student from the array.

// 1.
// function removeDuplicate(arrObj) {
//     sortArrObj(students)
//     // console.log(students);
//     for (let i = 1; i < students.length; i++) {
//         if (equalObjCheck(students[i - 1], students[i])) {
//             students.splice(i, 1);
//         }
//     }

//     // filter better 
// }
// console.log(students)
// removeDuplicate(students);
// console.log(students);

// 2.
function filterDuplicate(arrObj){
   return arrObj.filter((obj, idx, arr)=>{
        return idx === arr.findIndex((val) => (
            JSON.stringify(val) === JSON.stringify(obj)
          ))
    });
}
console.log(filterDuplicate(students));



// ii) split the above into different subarrays school wise.
let arrLabel = [];
for (let i = 0; i < students.length; i++) {
    if (!arrLabel.includes(students[i].collegeName))
        arrLabel.push(students[i].collegeName);
}

let subArray = [];
for (let i = 0; i < students.length; i++) {
    let label = students[i].collegeName
    if (!subArray[arrLabel.indexOf(label)]) {
        subArray[arrLabel.indexOf(label)] = [students[i]];
    } else {
        subArray[arrLabel.indexOf(label)].push(students[i]);
    }
}

// console.log(subArray);

// iii)sort the original array based on student's name.(ASC)

function sort_SName_ASC(details) {
    return details.sort((student1, student2) => {
        if (student1.name > student2.name) return 1;
        else if (student1.name < student2.name) return -1;
        else return 0;
    })
}

// console.log(sort_SName_ASC(students))

// iv) sort the original array based on student's average of marks; (DESC);

function sort_DESC_avgMarks(details) {
    return details.sort((student1, student2) => {
        const n = student1.marks.length;
        const avgMarkStudent1 = student1.marks.reduce((sum, i) => sum + i, 0) / n;
        const avgMarkStudent2 = student2.marks.reduce((sum, i) => sum + i, 0) / n;
        if (avgMarkStudent1 < avgMarkStudent2) return 1;
        else if (avgMarkStudent1 > avgMarkStudent2) return -1;
        else return 0;
    })
}

// console.log(sort_DESC_avgMarks(students))

// v) sort the original array based on students's average of marks if two students have same average then sort by their name ASC.

function sort_ASC_AvgMarks_Name(details) {
    return details.sort((student1, student2) => {
        const n = student1.marks.length;
        const avgMarkStudent1 = student1.marks.reduce((sum, i) => sum + i, 0) / n;
        const avgMarkStudent2 = student2.marks.reduce((sum, i) => sum + i, 0) / n;
        if (avgMarkStudent1 === avgMarkStudent2) {
            if (student1.name > student2.name) return 1;
            else if (student1.name < student2.name) return -1;
            else return 0;
        }

        if (avgMarkStudent1 > avgMarkStudent2) return 1;
        else if (avgMarkStudent1 < avgMarkStudent2) return -1;
        else return 0;
    })
}

// console.log(sort_ASC_AvgMarks_Name(students))

// 4. Write a regular expression to validate valid email addresses.

// The personal_info part contains the following ASCII characters.
// Uppercase (A-Z) and lowercase (a-z) English letters.
// Digits (0-9).
// Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
// Character . ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other.

// The domain name [for example com, org, net, in, us, info] part contains letters, digits, hyphens, and dots.

const regex4 = /^[a-zA-Z0-9][a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const emails = ["notanemail.com", "workingexample@email.com", "another_working@somethingelse.org", "notworking@1.com"]

// emails.forEach((email)=>{   
//     console.log(regex4.test(email));
// });

// 5. Write a regular expression which validates email which belongs to only 'solutelabs' domain.
const regex5 = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@solutelabs(?:\.[a-zA-Z0-9]+)*$/
// console.log(regex5.test('akshay.k@solutelabs.com'))


// 6. Write a regular expression which validate strong password policy which means password consists of minimum of 8 characters,
// atleast one upper case alphabet, atleast  one lower case alphabet, atleast one special character, atleast one digit.
const regex6 = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/
const password6 = 'A12a3@456'
// console.log(regex6.test(password6))

// 7. Write a regular expression which validates password which consists of minimum 6 characters either one or more  upper-case or one or more lower-case alphabets., either one or more digits or one or more special characters 
// (?=[a-z]+[\d]+)|([a-z]+[.!#$%&'*+/=? ^_`{|}~-]+){6,}|([A-Z]+[\d]+){6,}|((?=[A-Z]+)(?=[.!#$%&'*+/=? ^_`{|}~-]+)){6,}
const regex7 = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,})/
const password7 = 'A1a2@61'
// console.log(regex7.test(password7))