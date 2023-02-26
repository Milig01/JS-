/*Напишите функцию sum, которая бы работала следующим образом:
sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15
*/
let number = sum(5)(-3)(18);

console.log(+number);

function sum(a) {
    let num = a;

    function sumInt(b) {
        num += b;

        return sumInt;
    }

    sumInt[Symbol.toPrimitive] = function(hint) {
        if (hint == 'number') return num;
    }

    return sumInt;
}