/* ToDo  HTTP */

const httpExample_1 = () => {
   fetch('https://jsonplaceholder.typicode.com/posts/1')
}
// httpExample_1()

const httpExample_2 = () => {
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
// httpExample_2()

/* ToDo  xmlHttpRequest */
const xmlHttpRequestATemplate_1 = () => {
   const xhr = new XMLHttpRequest();
   xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1')
   xhr.send();
   
   const loadHandler = () => {
      console.log(JSON.parse(xhr.response));
   }
   xhr.onload = loadHandler;
}

// xmlHttpRequestATemplate_1()

/* ToDo вызов асинхронных действий */
const asyncActionsTemplate_1 = () => {
   setTimeout(() => {
      console.log('Hello world! 1')
   }, 1000)
}
// asyncActionsTemplate_1()

const asyncActionsTemplate_2 = () => {
   setInterval(() => {
      debugger
      console.log('Hello world! 2')
   }, 1000)
}
// asyncActionsTemplate_2()

const asyncActionsTemplate_3 = () => {
   console.log('Hello world! 3')
}
// window.onload = asyncActionsTemplate_3

const asyncActionsTemplate_4 = () => {
   Promise.resolve().then(() => {
      console.log('Hello world! 4')
   })
}
// asyncActionsTemplate_4()

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