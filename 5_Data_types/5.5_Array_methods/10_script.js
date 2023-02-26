/*Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
Многократные прогоны через shuffle могут привести к разным последовательностям элементов.
*/
let arr = [1, 2, 3];

let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0,
};

for (let i = 0; i < 1000000; i++) {
    shuffle(arr);
    //console.log(arr);
    count[arr.join('')]++;
}

for (let key in count) {
    console.log(`${key}: ${count[key]}`);
}

function shuffle(arr) {
    for (let i = 0; i < arr.length; i++) {
        let j = randomInteger(0, arr.length - 1);

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function randomInteger(min, max) {
    return Math.floor( (max - min + 1) * Math.random() + min );
}