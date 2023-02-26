let text = "Мне бы хотелось пойти погулять";
let text1 = "А мне нет";

console.log( truncate(text, 20) );
console.log( truncate(text1, 20) );

function truncate(str, maxlenght) {
    if (str.length > maxlenght) {
        return str.substr(0, maxlenght);
    } else return str;
}