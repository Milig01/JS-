/*Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
Например, если сейчас 23:00, то:
getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/
console.log( getSecondsToTomorrow() );

function getSecondsToTomorrow() {
    let dateCurrent = new Date();
    let dateTomorrow = new Date(dateCurrent.getFullYear(), dateCurrent.getMonth(), dateCurrent.getDate() + 1);

    return Math.round( (dateTomorrow - dateCurrent) / 1000);
}