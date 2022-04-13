/*  var, let, const */

function learnVariablesExample_0() {
  {
    try {
      throw new Error();
    } catch(err) {
      debugger
    }
    let x = 'test';
    debugger
  }
  debugger
}
// learnVariablesExample_0();

function learnVariablesExample_1() {
  if (true) {
    var x = 'test';
  }
  console.log(x);
}
// learnVariablesExample_1();

function learnVariablesExample_2() {
  if (true) {
    let x = 'test';
  }
  console.log(x);
}
// learnVariablesExample_2();

function learnVariablesExample_3() {
 function testVariable() {
   var x = 'test';
 }
  testVariable();
 console.log(x);
}
// learnVariablesExample_3();

function learnVariablesExample_4() {
  if (false) {
    var x = 'test';
  }
  console.log(x);
}
// learnVariablesExample_4();

function learnVariablesExample_5() {
  if (false) {
    let x = 'test';
  }
  console.log(x);
}
// learnVariablesExample_5();

function learnVariablesExample_6() {
  console.log(x);
  var x = 'test';
}
// learnVariablesExample_6();

function learnVariablesExample_7() {
  console.log(x);
  let x = 'test';
}
// learnVariablesExample_7();

function learnVariablesExample_8() {
  function testVariable() {
    console.log(x);
  }
  let x = 'test';
  testVariable();
}
// learnVariablesExample_8();

function learnVariablesExample_9() {
  const x = 'test';
  x = 10;
  console.log(x);
}
// learnVariablesExample_9()

function learnVariablesExample_10() {
  const obj = {
    name: 'John',
    age: 20
  };
  obj.age = 30;
  console.log(obj);
};
// learnVariablesExample_10()





/*  Деструкуризация */
function destructurizationExample_1() {
  const colorList = ['red', 'green', 'blue'];
  const [ c1, c2 ] = colorList;
  console.log('c1 - ', c1);
  console.log('c2 - ', c2);
}
// destructurizationExample_1()

function destructurizationExample_2() {
  const user = {
    id: '1',
    name: 'John',
    age: 20,
    address: 'Moscow'
  };
  const { name, age, ...rest } = user;
  console.log('name - ', name);
  console.log('rest - ', rest);
  console.log('user - ', user);
}
// destructurizationExample_2()

function destructurizationExample_3() {
  const user = {
    id: '1',
    name: 'John',
    address: 'Moscow'
  };
  const { name = 'Default Name', age = 40 } = user;
  console.log('name - ', name);
  console.log('age - ', age);
}
// destructurizationExample_3()

function destructurizationExample_4() {
  const user = {
    id: '1',
    name: 'John',
    address: 'Moscow'
  };
  const { name: innerName, age: innerAge } = user;
  console.log('innerName - ', innerName);
  console.log('innerAge - ', innerAge);
}
// destructurizationExample_4()

function destructurizationExample_5({ name, age, ...rest }) {
  console.log('name - ', name);
  console.log('age - ', age);
  console.log('rest - ', rest);
}
// destructurizationExample_5({
//   id: '1',
//   name: 'John',
//   age: 20,
// })

function destructurizationExample_6() {
  const user = {
    id: 111,
    name: 'John',
    data: {
      login: 'John_1995',
      password: 'qwerty'
    }
  };
  const { name, data: { login, password } } = user;
  console.log('name - ', name);
  console.log('login - ', login);
  console.log('password - ', password);
}
// destructurizationExample_6()





/* Спред оператор */
function spreadExample_1() {
  const priority = 'low';
  
  const user = {
    name: 'John',
    age: '25',
  };
  
  const defaultData = {
    address: 'Moscow',
    type: 'user'
  };
  
  const item = {
    ...user,
    ...defaultData,
    priority,
    id: 194831,
  };
  console.log('item - ', item);
}
// spreadExample_1()

function spreadExample_2() {
  const user = {
    name: 'John',
    age: '25',
  };
  
  const defaultData = {
    address: 'Moscow',
    type: 'user'
  };
  
  const item = Object.assign({}, user, defaultData);
  console.log('item - ', item);
}
// spreadExample_2()

function spreadExample_3() {
  const color_1 = ['red', 'green'];
  const color_2 = ['blue', 'black'];
  const colors = [
    ...color_1,
    ...color_2,
    'white'
  ];
  
  console.log('colors - ', colors)
}
// spreadExample_3();

function spreadExample_4() {
  const color_1 = ['red', 'green'];
  const color_2 = ['blue', 'black'];
  const colors =  [].concat(color_1, color_2);
  
  console.log('colors - ', colors);
}
// spreadExample_4()






/* Шаблонные строки */
function stringLiteralsExample_1() {
  function getTime() {
    return new Date()
  }
  
  const name = 'John';
  const message = `Hello, ${name}! It's ${getTime()} now.`
}
// stringLiteralsExample_1()


/* Стрелочные функции */

 function arrowFunctionExample_1() {
   const obj = {
     x: 10,
     fu: function () {
       console.log(this.x)
     },
     arrowFu: () => {
       console.log(this.x)
     }
   }
  
   obj.fu();
   obj.arrowFu();
   const { fu, arrowFu } = obj;
   fu();
   arrowFu();
 }
// arrowFunctionExample_1()

function arrowFunctionExample_2() {
  function test() {
    const fu = () => {
      console.log(this.x)
    }
    fu()
  }
  
  test.call({
    x: 'x'
  })
  test.call({
    x: 'y'
  })
}
// arrowFunctionExample_2()


/*  Дефолтные аргументы */

function defaultArgumentsExample_1(name = 'Default Name', age = 20, address = 'Moscow') {
   console.log ({
     name,
     age,
     address
   })
}

// defaultArgumentsExample_1('John',undefined,'Rio')


