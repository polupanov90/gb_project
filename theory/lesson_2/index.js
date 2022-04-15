/* ToDo Типы данных */
function typesExample_1() {
  const s = Symbol();
  const obj = {
    x: 'x',
    [s]: 'symbol'
  };
  
  for(let key in obj) {
    console.log(key)
  }
}
// typesExample_1();

function typesExample_2() {
  const x = 10n;
  const y = BigInt(Number.MAX_SAFE_INTEGER);
  const result = x + y;
  const result2 = 5n/2n;
  debugger
}
// typesExample_2();

function typesExample_3() {
  console.log(typeof null)
}
// typesExample_3();


/* ToDo Ссылочные типы */
function linkTypesExample_1() {
  const obj1 = {
    x: 1
  };
  const obj2 = obj1;
  obj2.x = 2;
  
  debugger
}
// linkTypesExample_1()

function linkTypesExample_2() {
  function fu1() {}
  fu1.test = 'test';
  
  const fu2 = fu1;
  fu2.test = 'test2';
  
  debugger
}
// linkTypesExample_2()

function linkTypesExample_3() {
  function fu() {
    function bar() {}
    bar.test = 10;
    return bar;
  }
  
  const f1 = fu();
  const f2 = fu();
  debugger
  f1.test = 20;
  debugger
}
// linkTypesExample_3()


/* ToDo Примитивы как объекты */
function primitivesExample_1() {
  const str1 = 'str1';
  const str2 = new String('str2');
  
  const t1 = typeof str1;
  const t2 = typeof str2;
  debugger
}
// primitivesExample_1()



/* ToDo Конструкторы  */
function constructorsExample_1() {
  function User() {
    this.name = 'User';
    this.age = 20;
    this.address = 'Moscow'
  }
  
  const user = new User()
  debugger
}
// constructorsExample_1()

function constructorsExample_2() {
  function User(name = 'Default name', age = 20, address = 'Moscow') {
    this.name = name;
    this.age = age;
    this.address = address
  }
  
  const user = new User('John', 31);
}
// constructorsExample_2()


/* ToDo Прототип Объекта */

function objectProtoExample_1() {
  const obj = {
    name: 'John',
    age: 20
  }
  console.log(obj.__proto__);
}
// objectProtoExample_1()

function objectProtoExample_2() {
  const arr = [ 1, 2, 3 ]
  console.log(arr.__proto__.map);
}
// objectProtoExample_2()

function objectProtoExample_3() {
  const str = 'str'
  str.__proto__.test = 'test'
  console.log(str.test);
}
// objectProtoExample_3()

/* ToDo Прототип Функции */
function functionProtoExample_1() {
  function fu() {}
  console.log(fu.prototype)
}
// functionProtoExample_1()

function functionProtoExample_2() {
  function User() {
    this.name = 'John';
    this.age = 20
  }
  User.prototype.test = 'test';

  const user = new User();
  console.log(user);
  console.log(user.__proto__)
  console.log(user.test)
  console.log(user.__proto__ === User.prototype)
}
// functionProtoExample_2()


/* ToDo Прототипное наследование Функции */
function prototypeInheritExample_1() {
  function X() {
    this.name = 'x'
  }
  X.prototype.fuX = function() {}
  
  function Y() {
    this.name = 'y'
  }
  Y.prototype = new X();
  Y.prototype.fuY = function() {}
  
  function Z() {
    this.name = 'z'
  }
  Z.prototype = new Y()
  Z.prototype.fuZ = function() {}
  
  const x = new X()
  const y = new Y()
  const z = new Z()
}
// prototypeInheritExample_1()

/* ToDo Классы и наследование */
function classesInheritExample_1() {
  class Animal {
    constructor(isAlive=false) {
      this.isAlive = isAlive;
    }
    
    name = 'animal'
    
    sayAnimal = () => {
      console.log(this.name)
    }
    
    sayName() {
      console.log(this.name)
    }
  }
  const animal = new Animal();
  console.log(animal);
  debugger
  
  class Dog extends Animal {
    constructor(...args) {
      super(...args);
    }
    name = 'dog'
  }
  
  const dog = new Dog();
  console.log(dog);
  debugger
}
// classesInheritExample_1()