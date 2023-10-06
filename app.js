// Node module system
const fs = require('node:fs');

// Core module (built-in module) operating system
const os = require('node:os');

// read file

// Sync => blocking code (wait for the code to finish) 
const fileContent = fs.readFileSync('./test.txt', 'utf8');
console.log(fileContent);


// Async => non-blocking code (don't wait for the code to finish)

fs.readFile("./test.txt", "utf8", (err, data) => {
    if(err)
        console.log(err);
    else
        console.log(data);
});

console.log("Ebrahim");

// write file non blocking code
fs.writeFile('./users.json' ,JSON.stringify([{"id":1 , "name":"ahmed"}]) , "utf8" , (err)=>{ 
    if(err)
        console.log(err);
    else
        console.log("file created");
} )

// delete file
// non blocking code
fs.unlink('./users.json' , (err) => {
    if(err)
        console.log(err);
    else
        console.log("file deleted");
})

// UTF-8 => Unicode Transformation Format 8-bit (8-bit is a byte)   
// => it is used to convert the buffer to a readable string , 
// buffer is a hex-decimal format of the data (binary data)

// streams is a way to read and write data in chunks (pieces)
// => it is used to read and write large files (big data)
// => it is used to read and write data in real time (like video streaming)
// streams [readable , writable]

const rStream = fs.createReadStream('./test.txt','utf8');
const wStrean = fs.createWriteStream('./stream.txt','utf8');
rStream.on('data' , (chunk) => {
    console.log(chunk);
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++");
    wStrean.write(chunk);
})