/*Напишите функцию printList(list), которая выводит элементы списка по одному.
Сделайте два варианта решения: используя цикл и через рекурсию.
*/
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};

printList(list);
console.log('');
printListRec(list);

function printList(list) {
    let next = list;

    while (next != null) {
        console.log(next.value);
        next = next.next;
    }
}

function printListRec(list) {
    if (list != null) {
        console.log(list.value);
        printList(list.next);
    }
}