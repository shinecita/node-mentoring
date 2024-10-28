const fs = require('node:fs')

// Define functions

function myFirstFunction() {
  console.log('My first function');  
}

const readMyFile = () => {
    fs.readFile('./sample.txt', 'utf-8', (err, data) => {
       console.log('PRINTING the file content', data);
    })
}

const mySecondFunction = () => {
   console.log('SECOND')
}

//Execute

myFirstFunction();
readMyFile();
mySecondFunction();
