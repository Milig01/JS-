/*Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт вызов f не более одного раза в ms миллисекунд.
Другими словами, когда мы вызываем debounce, это гарантирует, что все остальные вызовы будут игнорироваться в течение ms.
*/
let sum = (a, b) => console.log(a + b);

sum = debounce(sum, 1000);

sum(1, 2);
sum(4, 8); //проигнорирован
setTimeout(sum, 1010, 4, 8);

function debounce(f, ms) {
    func.isCalled = false;

    function func(...args) {
        if (!func.isCalled) {
            func.isCalled = true;

            setTimeout( (...args) => {
                f(...args);
                func.isCalled = false;
            }, ms, ...args);
        }
    }

    return func;
}