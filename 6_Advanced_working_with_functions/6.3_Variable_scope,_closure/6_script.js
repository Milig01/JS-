let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

users.sort(byField('name'));
users.forEach(item => console.log(`${item.name} - ${item.age} - ${item.surname}`));
console.log('\n');

users.sort(byField('age'));
users.forEach(item => console.log(`${item.name} - ${item.age} - ${item.surname}`));
console.log('\n');

users.sort(byField('surname'));
users.forEach(item => console.log(`${item.name} - ${item.age} - ${item.surname}`));


function byField(fieldName) {
    switch (fieldName) {
        case 'name':
            return (a, b) => a.name > b.name ? 1 : -1;
        case 'age':
            return (a, b) => a.age > b.age ? 1 : -1;
        case 'surname':
            return (a, b) => a.surname > b.surname ? 1 : -1;
        default: return null;
    }
}