/*Напишите функцию formatDate(date), форматирующую date по следующему принципу:
Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты",
всё в виде двух цифр, т.е. 31.12.16 10:00.
*/
console.log( formatDate(new Date(new Date - 1)) );
console.log( formatDate(new Date(new Date - 30 * 1000)) );
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) );
console.log( formatDate(new Date(new Date - 86400 * 1000)) )

function formatDate(date) {
    let diffDate = new Date() - date;

    if (diffDate < 1000) return 'прямо сейчас';

    if (diffDate < 1000 * 60) return `${Math.round(diffDate / 1000)} сек. назад`;

    if (diffDate < 1000 * 60 * 60) return `${Math.round(diffDate / 1000 / 60)} мин. назад`;

    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
}