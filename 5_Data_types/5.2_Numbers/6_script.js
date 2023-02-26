let obj = {};

for (let i = 0; i < 10000; i++) {
    let rnd = randomInteger(95, 100);

    if (`${rnd}` in obj) {
        obj[rnd]++;
    } else obj[rnd] = 0;
}

for (let num in obj) {
    console.log(`${num}: ${obj[num]}`);
}

function randomInteger(min, max) {
    return Math.floor( (max - min + 1) * Math.random() + min);
}
