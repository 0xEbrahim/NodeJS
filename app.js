// Node module
const fs = require('node:fs');
const os = require('node:os');

console.log(os.cpus());
fs.readFile('./test.txt', (err, data) => {
    if(err){
        console.log(err)
    }else
        console.log(data.toString())
})