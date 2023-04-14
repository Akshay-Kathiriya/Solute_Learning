const { json } = require("stream/consumers");
const fs = require('fs');
const bioData ={
    name:'akshay',
    age:21,
    channel:'ak'
};

// console.log(bioData);


// const jsondata = JSON.stringify(bioData);
// console.log(jsondata);
// const objdata = JSON.parse(jsondata);
// console.log(objdata)

const jsonData = JSON.stringify(bioData);
// fs.writeFile("json1.json",jsonData,(err)=>{
//     console.log('done');
// });

fs.readFile("json1.json","utf-8",(err, data)=>{
    const orgData = JSON.parse(data);
    console.log(data);
    console.log(orgData);
});