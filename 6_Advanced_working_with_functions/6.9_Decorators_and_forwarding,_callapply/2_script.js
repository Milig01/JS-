/*Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд.
*/
let sum = (a, b) => console.log(a + b);

sum = delay(sum, 2000);

sum(5, 6);

function delay(f, ms) {
    return function(...args) {
        setTimeout(f, ms, ...args);
    } 
}