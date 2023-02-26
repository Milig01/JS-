let cost = "$120";

console.log( extractCurrencyValue(cost) );

function extractCurrencyValue(str) {
    return +str.slice(1);
}