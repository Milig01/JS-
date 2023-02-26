/*Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.
Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд,
так чтобы мы могли добавить к нему .then:
*/
function delay(ms) {
    return new Promise(function(resolve, reject) {
        try{
            dsfsdf //<-- не забыть убрать
            setTimeout(() => resolve('Выполнил очень долгую операцию'), ms);
        }

        catch(err) {
            reject(err);
        }
    });
}

delay(3000).then((text) => console.log(`выполнилось через 3 секунды ${text}`))
.catch((err) => console.log(`Ошибка! ${err}`));
