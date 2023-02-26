/*Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
Сделайте два варианта решения.
Используя setInterval.
Используя рекурсивный setTimeout.
*/
printNumbersInterval(1, 15);
//printNumbersTimeout(1, 15);

function printNumbersInterval(from, to) {
    let num = from;
    let timerId = setInterval(showNumber, 1000);

    function showNumber() {
        console.log(num);
        num++;
        if (num > to) clearInterval(timerId);
    }
}

function printNumbersTimeout(from, to) {
    let num = from;
    setTimeout(showNumber, 1000);

    function showNumber() {
        console.log(num);
        num++;
        if (num <= to) setTimeout(showNumber, 1000);
    }
}