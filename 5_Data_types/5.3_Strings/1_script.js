let name = "вася";

console.log( ucFirst(name) );

function ucFirst(str) {
    let char = str[0].toUpperCase();
    let text = char + str.slice(1);

    return text;
}