/*Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
Задание состоит из двух частей.
Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО»
(разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции.
Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
*/
let calculator = new Calculator();

console.log( calculator.calculate('3 + 5') );
console.log( calculator.calculate('3 - 5') );

calculator.addMethod('*', (a, b) => a * b);
calculator.addMethod("/", (a, b) => a / b);
calculator.addMethod("**", (a, b) => a ** b);

console.log( calculator.calculate('3 * 5') );
console.log( calculator.calculate('3 / 5') );
console.log( calculator.calculate('3 ** 5') );

function Calculator() {
    this.calculate = function(expression) {
        let arr = expression.split(' ');

        return this[arr[1]](+arr[0], +arr[2]);
    };
    this['+'] = (a, b) => a + b;
    this['-'] = (a, b) => a - b;
    this.addMethod = function(name, func) {
        this[name] = func;
    }
}