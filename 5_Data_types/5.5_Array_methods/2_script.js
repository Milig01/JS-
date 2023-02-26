/*Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
Функция должна возвращать новый массив и не изменять исходный.
*/
let arr = [5, 1, 9, 13, 7, 5, 6, 5];

let filtered = filterRange(arr, 1, 6);

console.log(filtered);
console.log(arr);

function filterRange(arr, a, b) {
    return arr.filter(item => item >= a && item <= b);
}