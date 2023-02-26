let k = 2;
let n = 100;

label:
for (let i = k; i <= n; i++) {
    for (let j = 2; j <= i ** (1 / 2); j++) {
        if (i % j == 0) continue label;
    }

    console.log(i);
}