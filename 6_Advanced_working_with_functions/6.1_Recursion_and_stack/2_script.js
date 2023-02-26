/*Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.
*/
console.log( factotial(5) );

function factotial(n) {
    if (n == 1) return 1;

    return n * factotial(n-1);
}