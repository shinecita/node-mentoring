// A constant function 'sayHello' that takes a 'name' parameter
const sayHello = (name) => {
    console.log(`Hello, ${name}`);
}
 
// Use setTimeout to delay the execution of 'sayHello' function by 10 sec
setTimeout(sayHello, 10000, 'Caro');