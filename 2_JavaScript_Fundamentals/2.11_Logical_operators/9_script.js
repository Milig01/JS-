let text = prompt("Введите логин:");

if (text == "Админ") {
    let password = prompt("Введите пароль:");

    if (password == "Я главный") {
        alert("Здравствуйте!");
    } else if(password) {
        alert("Неверный пароль");
    } else {
        alert("Отменено");
    }
} else if (text) {
    alert("Я вас не знаю");
} else {
    alert("Отменено");
}