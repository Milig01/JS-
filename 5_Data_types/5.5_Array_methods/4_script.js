//Сортировать в порядке по убыванию
let arr = [5, 1, 9, 13, 7, 5, 6, 5];

arr.sort((a, b) => {
    if (a < b) return 1;
    if (a == b) return 0;
    if (a > b) return -1;
});

console.log(arr);