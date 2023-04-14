const fs = require('fs');

// fs.writeFile('read.txt', 'today is awesome day.',(err)=>{
//     if(err) throw err;
//     console.log('The file has been saved!')
// })

// fs.appendFile('read.txt','appended data.',(err)=>{
//     console.log("Appended successfully.")
// })

fs.readFile('read.txt','utf-8',(err,data)=>{if(!err){
    console.log(data);
}})
// console.log(data)