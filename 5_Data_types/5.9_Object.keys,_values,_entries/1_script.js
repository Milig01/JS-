/*Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
Если объект salaries пуст, то результат должен быть 0.
*/
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log( sumSalaries(salaries) );

function sumSalaries(salaries) {
    let sum = 0;

    for (let val of Object.values(salaries)) {
        sum += val;
    }

    return sum;
}