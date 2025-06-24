const fs = require('fs');

function read(err, data) {
    if (err) {
        console.error("Error reading file:", err.message);
        return;
    }
    console.log(data);
}

fs.readFile('a.txt', 'utf-8', read);
fs.readFile('b.txt', 'utf-8', read);

console.log('done!');
