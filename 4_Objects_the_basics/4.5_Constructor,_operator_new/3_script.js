let accumulator = new Accumulator(10);

accumulator.read();
accumulator.read();

alert(accumulator.value);

function Accumulator(startingValue) {
    this.value = startingValue;
    
    this.read = function() {
        this.value += +prompt("Введите число:");
    }
}