let sum = (a, b) => console.log(a + b);

sum = throttle(sum, 1000);

sum(1, 2);
sum(4, 8);
sum(7, 3);
sum(40, 8);

function throttle(f, ms) {
    func.isCalled = false;
    func.lastInQueue = null;

    function func(...args) {
        if (!func.isCalled) {
            func.isCalled = true;

            setTimeout( (...args) => {
                f(...args);
                func.isCalled = false;
                if (func.lastInQueue != null) {
                    func.call(func.lastInQueue[0], ...func.lastInQueue[1]);
                    func.lastInQueue = null;
                }
            }, ms, ...args);
        } else {
            func.lastInQueue = [this, args];
        }
    }

    return func;
}