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

//printList(list);
printListRec(list);

// изменяет сам массив!!!
function printList(list) {
    let obj = Object.assign({}, list);

    while (obj.next != null) {
        let next = obj;

        while (next.next.next != null) {
            next = next.next;
        }

        console.log(next.next.value);
        next.next = null;
    }

    console.log(obj.value);
}

function printListRec(list) {
    if (list.next != null) printListRec(list.next);
    console.log(list.value);
}