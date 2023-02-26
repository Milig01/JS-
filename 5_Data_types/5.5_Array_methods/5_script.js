/*У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
Создайте функцию copySorted(arr), которая будет возвращать такую копию.
*/
let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(arr);
console.log(sorted);


function copySorted(arr) {
    let copyarr = arr.slice();

    copyarr.sort();

    return copyarr;
}