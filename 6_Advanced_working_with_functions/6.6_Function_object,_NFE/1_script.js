/*Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:
counter() должен возвращать следующее значение (как и раньше).
counter.set(value) должен устанавливать счётчику значение value.
counter.decrease() должен уменьшать значение счётчика на 1.
Посмотрите код из песочницы с полным примером использования.
*/
let counter = makeCounter();

console.log( counter() );
console.log( counter() );
console.log( counter.set(10) );
console.log( counter() );
console.log( counter() );
console.log( counter.set(5) );
console.log( counter.decrease() );
console.log( counter.decrease() );

function makeCounter() {
    let count = 0;
  
    let counter = function() {
      return ++count;
    };

    counter.set = function(value) {
        count = value;
        return count;
    }
    counter.decrease = function() {
        --count;
        return count;
    }

    return counter;
}