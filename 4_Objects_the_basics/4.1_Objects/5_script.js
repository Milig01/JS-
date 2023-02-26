let menu = {
    width: 200,
    height: 300,
    title: "My menu",
};

multiplyNumeric(menu);

for (let prop in menu) {
    console.log(`${prop}: ${menu[prop]}`);
}

function multiplyNumeric(object) {
    for (let prop in object) {
        if (typeof object[prop] == "number") {
            object[prop] *= 2;
        }
    }
}