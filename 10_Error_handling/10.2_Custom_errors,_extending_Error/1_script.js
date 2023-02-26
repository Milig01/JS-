/*Создайте класс FormatError, который наследует от встроенного класса SyntaxError.
Класс должен поддерживать свойства message, name и stack.
*/
class FormatError extends SyntaxError {
    constructor(message) {
        super(message)
        this.name = 'FormatError';
    }
}

let error = new FormatError("ошибка форматирования");

try {
    throw(error);
}

catch(err) {
    console.log( err.message ); 
    console.log( err.name ); 
    console.log( err.stack ); 

    console.log( err instanceof FormatError ); 
    console.log( err instanceof SyntaxError ); 
}

finally {
    console.log('Ошибка обработана');
}