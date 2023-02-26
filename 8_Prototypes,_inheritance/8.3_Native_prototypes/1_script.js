/*Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.
*/
Function.prototype.defer = defer;

func.defer(1000);

function defer(ms) {
    setTimeout(this, ms);
}

function func() {
    console.log('Вызов функции');
}