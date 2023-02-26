let calculator = {
    read() {
        this.number1 = +prompt('Введите первое значение');
        this.number2 = +prompt('Введите второе значение');
    },
    sum() {
        return this.number1 + this.number2;
    },
    mul() {
        return this.number1 * this.number2;
    },
};

calculator.read();

alert( calculator.sum() );
alert( calculator.mul() );