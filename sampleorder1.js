//while(operationsAreRunning)

//{
console.log('Hello => number 1');

const printLog = () => {
  console.log('Running SetImmediate'); //3
}

setImmediate(printLog);

setTimeout(() => {
  console.log('Running SetTimeout 0'); //2 
}, 0);



for (let i =0; i<10000; i++) {
  console.log(i);
  //do something;
}

// process.nextTick se ejecuta en ESTE tick, after the current operation
process.nextTick(() => {
  console.log('Running process next tick'); //1 

});
//}