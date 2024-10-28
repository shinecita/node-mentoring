
const someFunction = (name, lastname) => {
    console.log('hello', name, lastname);
}



/*const blockingFunction = () => {

    for (let i = 0; i<1000000; i++) {
        //do something
    }
} */

//const timerIdInterval= setInterval(someFunction, 500);



const setImmediateTimerId = setImmediate(() => {

    console.log('Set Immediate callback');
})

const timerId = setTimeout(() => {
    clearImmediate(setImmediateTimerId);
    console.log('Timeout')
}, 0);



/*
setTimeout(()=> {
  console.log('Calling a Blocking function')
  //clearInterval(timerIdInterval);
  blockingFunction();
}, 2000);*/

