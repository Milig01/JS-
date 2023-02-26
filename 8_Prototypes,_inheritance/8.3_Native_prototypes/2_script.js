/*Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.
*/
Function.prototype.defer = defer;

let sum = (a, b) => console.log(a + b);

sum.defer(2000)(11, 5);

function defer(ms) {
    return (...args) => setTimeout(this, ms, ...args);
}