let rnd = random(0, 100);

console.log(rnd);

function random(min, max) {
    return (max - min) * Math.random() + min;
}