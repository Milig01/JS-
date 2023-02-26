/*В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2)
и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.
*/
let date = new Date(2012, 0, 3);

console.log( getLocalDay(date) );
console.log(date);

function getLocalDay(date) {
    if (date.getDay() == 0) return 7;

    return date.getDay();
}