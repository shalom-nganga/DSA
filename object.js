let name = 'Evans';
let age = 34;

function sayHello(nameOfPerson) {
  console.log(`Hello, my name is ${nameOfPerson}.`);
}

function sayAge(age) {
  console.log(`I am ${age} years old.`);
}

function haveBirthday(age) {
  return age + 1;
}

sayHello(name);
// => Hello, my name is Evan.
sayAge(age);
// => I am 34 years old.
age = haveBirthday(age);
sayAge(age);
// => I am 35 years old.