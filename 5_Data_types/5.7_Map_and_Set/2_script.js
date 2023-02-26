/*Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
*/
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

let res = aclean(arr);

console.log(res);

function aclean(arr) {
    let map = new Map();

    for (let word of arr) {
        let sorted = word.toLowerCase().split('').sort().join('');
        map.set(sorted, word);
    }

    return Array.from(map.values());
}