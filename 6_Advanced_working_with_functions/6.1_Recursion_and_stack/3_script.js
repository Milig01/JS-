/*Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2.
То есть, следующее число получается как сумма двух предыдущих.
Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....
Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.
Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
*/
console.log( fib(6) );
console.log( fib(7) );
console.log( fib(77) );

function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 2; i < n; i++) {
        [a, b] = [a + b, a];
    }

    return a;
}