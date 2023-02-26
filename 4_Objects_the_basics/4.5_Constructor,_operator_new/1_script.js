let obj = {};

let a = new A();
let b = new B();

console.log(a == b);

function A() {
    return obj;
}

function B() {
    return obj;
}

