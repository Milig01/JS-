let styles = ['Джаз', 'Блюз'];
console.log(styles);

styles.push('Рок-н-ролл');
console.log(styles);

styles[ elementInMiddle(styles) ] = 'Классика';
console.log(styles);

console.log( styles.shift() );

styles.unshift('Рэп', 'Регги');
console.log(styles);

function elementInMiddle(array) {
    let index = Math.floor( (array.length / 2) );

    return index;
}