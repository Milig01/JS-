let number = readNumber();

alert(`Вы ввели ${number}`);

function readNumber() {
    let input;

    while ( isNaN(input) ) {
        input = prompt('Введите число');
    }

    if (input == null || input == "") {
        return null;
    }

    return +input;
}