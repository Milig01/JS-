let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}
let obj = {};

sum = sumSalaries(salaries);
sum1 = sumSalaries(obj);

console.log(sum);
console.log(sum1);

function sumSalaries(employees) {
    let sum = 0;

    for (let prop in employees) {
        sum += employees[prop];
    }

    return sum;
}