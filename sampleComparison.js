const setInmediateSample = () => console.log('setInmediateSample');
const processNextTick = () => console.log('processNextTick');
const processNextTickResolved = () => console.log('processNextTickResolved');
const zoo = () => console.log('zoo');

const start = () => {
  console.log('start');

  //On process start inmediately log bar 
  setImmediate(setInmediateSample);

   //Create a Promise
  new Promise((resolve, reject) => {
    resolve('promise resolved');
  }).then(resolve => {
    console.log(resolve);
    process.nextTick(processNextTickResolved);
  });
  
  setTimeout(() => console.log('setTimeout'), 0);
  process.nextTick(processNextTick);
  
};

start();

// start foo bar zoo baz
