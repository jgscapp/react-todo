function add (a, b) {
  return a+b;
}

console.log(add(3,1));

var toAdd = [9,5];
//use spread operator three elipsis (...) to "spread" the values in the arrey
//as an arguments in the function
console.log(add(...toAdd));


var groupA = ['Dana', 'Sebas'];
var groupB = ['Sonia', 'Gera'];
var final = [...groupB, 3, ...groupA]

console.log(final);

var person = ['Andrew', 25];
var personTwo =  ['Jen', 29];

function greet (name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}

greet(...person);
greet(...personTwo);

var names = ['Mike', 'Ben'];
var final2 = ['Andrew', ...names];

final2.forEach(function (name) {
  console.log('Hi ' + name);
});
