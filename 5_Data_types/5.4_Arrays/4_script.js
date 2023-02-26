alert( sumInput() );

function sumInput() {
    let sum = 0;
    let array = [];
    let input = prompt('Введите число');

    while ( !isNaN(input) && input != '' && input != null) {
        array.push(+input);
        input = prompt('Введите число');
    }

    if (array.length == 0) return 'Массив пуст';

    for (let elem of array) {
        sum += elem;
    }

    return sum;
}