/**
 * Implement a library that has 2 types of books. 
 * 
 *   technical - history
 * 
 *   Every 2 seconds a client order a book, each client order a different book, start with a technical book order.
 *   
 *   At the end of 45 seconds print how many history books were ordered.
 */

let historyBooks = 0;
let isHistory = true;
const orderBook = () => {
   if (isHistory) historyBooks++
   isHistory = !isHistory
}

const orderBookTimer = setInterval(orderBook, 2000);

setTimeout(()=> {
   clearInterval(orderBookTimer)
   console.log(`There were ${historyBooks} history books ordered`)
}, 45000)