let message;
let login = "Сотрудник";

message = login == "Сотрудник" ? "Привет" :
    login == "Директор" ? "Здравствуйте" :
    login == "" ? "Нет логина" : "";

console.log(message);