console.log('Hello => number 1');

setImmediate(() => {
  console.log('Running before the timeout => number '); //4
});

setTimeout(() => {
  console.log('The timeout running last => number '); //3
}, 0);


process.nextTick(() => {
  console.log('Running at next tick => number '); //1
});