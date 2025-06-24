//I/0 heavy operation refers to a given task in a system where there is a lot of data transfer between the program and external systems of the device   
const fs = require('fs');

const content = fs.readFile('a.txt', 'utf-8');//reads file asynchronously. The program does not wait until the file is fully read before continuing execution. Returns the file content using a callback. Faster than synchronous reading for large files. 
const content1 = fs.readFileSync('b.txt', 'utf-8');//reads file synchronously. The program waits until the file is fully read before continuing execution.Returns the file content directly instead of using a callback. Simpler to use but can slow down performance if reading large files.
console.log(content);
console.log(content1);