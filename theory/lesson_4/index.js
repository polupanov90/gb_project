/* ToDo Promises */

const promiseActionsTemplate_1 = () => {
   const promise = new Promise(() => {
      console.log('hello from promise!')
   })
   debugger
}
// promiseActionsTemplate_1()
const promiseActionsTemplate_2 = () => {
   const promise = new Promise((resolve) => {
      console.log('hello from promise!')
      resolve()
   })
   debugger
   promise.then(() => {
      debugger
   })
}
// promiseActionsTemplate_2()

const promiseActionsTemplate_3 = () => {
   const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
         const random = Math.floor(Math.random() * 100);
         if (random < 50) {
            resolve(random)
         } else {
            reject(random)
         }
      }, 1000)
   })
   
   
   promise.then((random) => {
      console.log(`Resolve random - ${random}`)
   })
   
   promise.catch((random) => {
      console.log(`Reject random - ${random}`)
   })
   
}

// promiseActionsTemplate_3();

const promiseActionsTemplate_4 = () => {

}
// promiseActionsTemplate_4();


/* ToDo fetch */
const fetchExample_1 = () => {
   fetch('https://jsonplaceholder.typicode.com/posts/1')
}
// fetchExample_1()

const fetchExample_2 = () => {
   fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
         title: 'foo',
         body: 'bar',
         userId: 1,
      }),
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
      },
   })
}

// fetchExample_1()

/* ToDo this */

const thisExample_1 = () => {
   function fu() {
      console.log(this)
   }
   fu()
}
// thisExample_1()

const thisExample_2 = () => {
   'use strict'
   function fu() {
      console.log(this)
   }
   fu()
}
// thisExample_2()

const thisExample_3 = () => {
   function fu() {
      console.log(this)
   }
   
   const obj = {
      fu,
      name: 'John',
      age: 20,
   }
   fu();
   obj.fu()
}
// thisExample_3()

const thisExample_4 = () => {
   function fu() {
      console.log(this);
   }
   
   const obj = {
      name: 'John',
      age: 20,
   };
   
   fu.call(obj);
   const fu2 = fu.bind(obj, 1, 2, 3);
   fu2();
   const fu3 = fu.apply(obj, [1, 2, 3]);
   fu3();
}
// thisExample_4()


const thisExample_5 = () => {
   const obj = {
      name: 'John',
      age: 20,
      sayThis: function () {
         console.log(this);
      }
   };
   
   function fu(callBack) {
      callBack()
   }
   
   obj.sayThis();
   
   fu(obj.sayThis);
}
// thisExample_5();

const thisExample_6 = () => {
   function User() {
      this.name = 'John';
      console.log(this)
   }
}
// thisExample_6();

const thisExample_7 = () => {
   function fu() {
      const arrowFu = () => {
         console.log('arrowFu', this)
      }
      return arrowFu;
   }
   
   const bar = fu.call({
      name: 'John'
   })
   
   bar();
   
   const obj = {
      name: 'Lu',
      bar
   }
   
   obj.bar();
}
// thisExample_7();

/* ToDo Регулярные выражения */

const regExpExample_1 = () => {
   const re = /test/giu;
   const re2 = new RegExp('test', 'giu');
   
   const matchResult = 'My test'.match(re);
   const replaceResult = 'My test'.replace(re2, '>my-word<');
   console.log('matchResult - ', matchResult);
   console.log('replaceResult - ', replaceResult);
}

// regExpExample_1()


const regExpExample_2 = () => {
   const re = /экранирование символов - \/ \[ \( \. /;
   const re2 = /символьные классы - \d\D \s\S \w\W /;
   const re4 = /любой символ - . /;
   const re5 = /^Начало и конец строки$/;
   const re6 = /Диапозоны [А-яZ-z0-9]/;
}

// regExpExample_2()