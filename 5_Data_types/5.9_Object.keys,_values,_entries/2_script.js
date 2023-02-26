/*Напишите функцию count(obj), которая возвращает количество свойств объекта:
*/
let user = {
    name: 'John',
    age: 30
};

console.log( count(user) );

function count(obj) {
    return Object.keys(obj).length;
}