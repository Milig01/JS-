/*Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.
Каждый вызов должен сохраняться как массив аргументов.
*/
let s = spy(sum);

s(1, 3);
s(4, -2);
s(6, 19);
s(4, 5);
s(10, 3);

let arr = s.calls.keys();

for (let prop of arr) {
    console.log(prop);
}

function sum(a, b) {
    console.log(a + b);

    return a + b;
}

function spy(func) {
    casheFunc.calls = new Map;

    function casheFunc(...args) {

        let key = Array.from(args);

        if ( casheFunc.calls.has(key) ) {
            return casheFunc.calls.get(key);
        }

        let result = func(...args);

        casheFunc.calls.set(key, result);

        return result;
    }

    return casheFunc;
}