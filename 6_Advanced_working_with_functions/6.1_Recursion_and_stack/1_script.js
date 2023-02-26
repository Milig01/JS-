/*Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
Сделайте три варианта решения:
С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
С использованием формулы арифметической прогрессии.
*/
console.log( sumTo(10000) );
console.log( sumToFor(100000000) );
console.log( sumToFormula(1000000000) );

function sumTo(n) {
    if (n == 1) return 1;

    return n + sumTo(n - 1);
}

function sumToFor(n) {
    let sum = 0;
    for ( let i = 0; i <= n; i++) sum += i;

    return sum;
}

function sumToFormula(n) {
    return (1 + n) * n / 2;
}