/**
 * Running 
 */


const mainService = setInterval(()=> {
    console.log('test')
}, 2000)

setTimeout(() => {
    clearInterval(mainService);
}, 5000)