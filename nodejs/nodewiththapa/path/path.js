const path = require('path');

const dir = 'C:\Users\Lenovo\Videos\Captures';
console.log(path.dirname(dir));
console.log(path.extname(dir));
console.log(path.basename(dir))

const myPath  = path.parse(dir);
console.log(myPath)
console.log(myPath.root);