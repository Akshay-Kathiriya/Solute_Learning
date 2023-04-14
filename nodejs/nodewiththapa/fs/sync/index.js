const  fs  = require('node:fs');
const buffer =  require('node:buffer');

// const data = new Uint8Array(buffer.Buffer.from('Hello sync Node.js'));
// console.log(data);
// fs.writeFileSync('message.txt', data, (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });

// fs.appendFileSync('message.txt','This is appended row.');

const buf_data = fs.readFileSync('fs.txt','utf-8');
console.log(buf_data)

// fs.renameSync('message.txt','fs.txt')
