/*Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
*/
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log( topSalary(salaries) );

function topSalary(salaries) {
    let topName = null;
    let topSalary = 0;

    for (let [name, salary] of Object.entries(salaries)) {
        if (salary >= topSalary) {
            topName = name;
            topSalary = salary;
        }
    }

    return topName;
}