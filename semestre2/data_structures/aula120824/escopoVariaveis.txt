var myVariable = 'GLOBAL';
myOtherVariable = 'GLOBAL';

function myFunction() {
 var myVariable = 'LOCAL';
 return myVariable;
}

function myOtherFunction() {
 myOtherVariable = 'LOCAL';
 return myOtherVariable;
}

console.log('myVariable: ' + myVariable);
console.log('myFunction: ' + myFunction());
console.log('myOtherVariable: ' + myOtherVariable);
console.log('myOtherFunction: ' + myOtherFunction());
console.log('myOtherVariable: ' + myOtherVariable);
