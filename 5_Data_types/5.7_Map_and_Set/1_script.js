/*Допустим, у нас есть массив arr.
Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
*/
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

let set = unique(values);

console.log(set);

function unique(arr) {
    return Array.from( new Set(arr));
}