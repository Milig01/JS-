/*Пусть arr – массив строк.
Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
*/
let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

let arr = unique(strings);

console.log(arr);

function unique(arr) {
    let uniqarr = [];

    arr.forEach( item => {
        if ( !uniqarr.includes(item) ) uniqarr.push(item);
    });

    return uniqarr;
}