console.log( getMaxSubSum([-1, 2, 3, -9]) );
console.log( getMaxSubSum([2, -1, 2, 3, -9]) );
console.log( getMaxSubSum([-1, 2, 3, -9, 11]) );
console.log( getMaxSubSum([-2, -1, 1, 2]) );
console.log( getMaxSubSum([100, -9, 2, -3, 5]) );
console.log( getMaxSubSum([1, 2, 3]) );

/*Находит непрерывный подмассив с наибольшей суммой.
в переменной result хранится начальный и конечный индексы подмассива и его сумма.
*/
function getMaxSubSum(numericArray) {
    let result = {
        startIndex: 0,
        endIndex: 0,
        sum: 0,
    }
    let selectingResult = Object.assign({}, result);
    let arrayForTask = Array.from(numericArray);
    let resultArray = [];

    //На каждой итерации происходит 3 проверки
    for (let i = 0; i < numericArray.length; i++) {
        //Если частичная сумма меньше нуля, то поиск подмассива заканчиваеться, записываются его данные
        //и начинается новый поиск подмассива.
        if(arrayForTask[i] <= 0) {
            if (selectingResult.sum > result.sum) Object.assign(result, selectingResult);

            selectingResult.startIndex = i + 1;
            selectingResult.sum = 0;

        //Если частичная сумма меньше, ранее найденной в этом подмассиве наибольшей суммы, то поиск продолжается.
        } else if (arrayForTask[i] <= selectingResult.sum) {
            arrayForTask[i + 1] += arrayForTask[i];

        //Если частичная сумма оказывается наибольшей в данном подмассиве, то данные обновляются и продолжается поиск.
        } else {
            arrayForTask[i + 1] += arrayForTask[i];
            selectingResult.endIndex = i;
            selectingResult.sum = arrayForTask[i];
        }
    }

    if (selectingResult.sum > result.sum) Object.assign(result, selectingResult);

    for (let i = result.startIndex; i <= result.endIndex; i++) {
        resultArray.push(numericArray[i]);
    }

    return result.sum;
}