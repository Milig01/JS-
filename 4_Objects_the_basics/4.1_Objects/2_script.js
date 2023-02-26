let schedule = {};

console.log( isEmpty(schedule) );

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) );

function isEmpty(object) {
    for (let prop in object) {
        if (`${prop}` in object) return true;
    }

    return false;
}