/*Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
Параметры:
year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
*/
console.log( getLastDayOfMonth(2013, 1) );

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1);

    date.setDate( date.getDate() - 1 );

    return date.getDate();
}