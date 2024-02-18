class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  
    sayAge() {
      console.log(`I am ${this.age} years old.`);
    }
  
    haveBirthday(age) {
      console.log(`It's my birthday!`);
      this.age += 1;
    }
  }
  
  let evan = new Person('Evan', 34);
  
  evan.sayHello();
  // => Hello, my name is Evan.
  evan.sayAge();
  // => I am 34 years old.
  evan.haveBirthday();
  // => It's my birthday.
  evan.sayAge();
  // => I am 35 years old.
  evan;
  // => Person { name: 'Evan', age: 35 }