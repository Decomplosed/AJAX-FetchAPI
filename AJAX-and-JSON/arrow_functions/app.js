// const sayHello = function() {
//   console.log('Hello');
// }

// const sayHello = () => {
//   console.log('Hello');
// }

// const sayHello = () => console.log('Hello');

// const sayHello = () => 'Hello'

// const sayHello = () => ({msg: 'Hello'})

// const sayHello = name => `Hello ${name}`

// const sayHello = (firstName, lastName) => `Hello ${firstName} ${lastName}`

// console.log(sayHello('Bart', 'Man'))

const users = ['Bart', 'John', 'Willy']

// const nameLength = users.map(function(name){
//   return name.length
// })

// const nameLength = users.map((name) => { 
//   return name.length 
// })

const nameLength = users.map(name => name.length)

console.log(nameLength);