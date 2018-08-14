const operations = require('./operations.js');
const readline = require('readline');
var express = require('express');

var  routes = require('./routes.js');
var calc = express();

calc.use('/', routes);

var http = require('http');

var listener = calc.listen(8080, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 8080
});



var express = require('express');

var  routes = require('./routes.js');
var calc = express();

calc.use('/', routes);

var http = require('http');

var listener = calc.listen(8080, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 8080
  
  

// Use readline to create command line interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//welcome screen
console.log(`
Calc.js

Welcome to the Node.js Calculator app!
Version: 1.0.0.

Usage: The user will be prompted for two numbers,
then asked to select their operation of choice.
`);

//message to require input from user
rl.question('Enter the first number: ', (x) => {
  rl.question('Enter the second number: ', (y) => {
    //section of failing test *dont forget the } below!*
    // if (!operations.validateNumbers(x, y)){
    //   console.log('Only numbers are allowed! Please restart the program.');
    // }
    // else{
    rl.question(`
Please select from the following options:

[1] Addition (+)
[2] Subtraction (-)
[3] Multiplication (*)
[4] Division (/)

Enter your choice: `, (choice) => {
  //validate that only numbers are being entered
  //though we can remove that if we put buttons in the front end later
  if (!operations.validateNumbers(x, y)) {
    console.log('Only numbers are allowed! Please restart the program.');
  } else {
    switch (choice) {
      case '1':
        console.log(`The sum of ${x} and ${y} is ${operations.add(x, y)}.`);
        break;
      case '2':
        console.log(`The difference of ${x} and ${y} is ${operations.subtract(x, y)}.`);
        break;
      case '3':
        console.log(`The product of ${x} and ${y} is ${operations.multiply(x, y)}.`);
        break;
      // case '4':
      //   console.log(`The quotient of ${x} and ${y} is ${operations.divide(x, y)}.`);
      //   break;
      default:
        console.log('Please restart the program and select a number between 1 and 4.');
        break;
    }
  }
      rl.close();
    });//} //dont forget to un-comment me
  });
});
});

module.exports = calc;

