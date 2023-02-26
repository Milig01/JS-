/*Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
*/
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

arr.forEach(item => {
    console.log(`${item.name} - ${item.age}`);
});

function sortByAge(arr) {
    arr.sort((a, b) => {
        if (a.age > b.age) return 1;
        if (a.age == b.age) return 0;
        if (a.age < b.age) return -1;
    });
}