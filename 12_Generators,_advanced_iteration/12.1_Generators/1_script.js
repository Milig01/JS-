let generator = pseudoRandom(2134);

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

function* pseudoRandom(seed) {
    while (seed != -1) {
        seed = seed * 16807 % 2147483647;
        yield seed;
    }
}