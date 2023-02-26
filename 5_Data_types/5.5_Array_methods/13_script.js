/*Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.
*/
let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

for (let id in usersById) {
    console.log(`${id}: {id: ${usersById[id].id}, name: ${usersById[id].name}, age: ${usersById[id].age}}`);
}

function groupById(arr) {
    return arr.reduce( (obj, item) => {
        obj[item.id] = item;
        
        return obj;
    }, {});
}