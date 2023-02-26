/*Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
Да, именно таким образом, используя двойные круглые скобки (не опечатка).
*/
console.log( sum(1)(2) );
console.log( sum(5)(-1) );
console.log( sum(10)(15) );

function sum(a) {
    return b => a + b;
}