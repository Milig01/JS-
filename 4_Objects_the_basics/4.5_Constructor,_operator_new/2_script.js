let calculator = new Calculator();

calculator.read();

alert( calculator.sum() );
alert( calculator.mul() );

function Calculator() {
    this.read = function() {
        this.number1 = +prompt('Введите первое значение');
        this.number2 = +prompt('Введите второе значение');
    }

    this.sum = function() {
        return this.number1 + this.number2;
    }

    this.mul = function() {
        return this.number1 * this.number2;
    }
}