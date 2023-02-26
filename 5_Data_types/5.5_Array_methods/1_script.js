/*Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
То есть дефисы удаляются, а все слова после них получают заглавную букву.
*/
console.log( camelize("background-color") )
console.log( camelize("list-style-image") )
console.log( camelize("-webkit-transition") )

function camelize(str) {
    let arraystr = str.split('-');

    let result = arraystr.map((item, index) => {
        if (index > 0) {
            let char = item[0].toUpperCase();
            return char + item.slice(1);
        }
        return item;
    });

    return result.join('');
}