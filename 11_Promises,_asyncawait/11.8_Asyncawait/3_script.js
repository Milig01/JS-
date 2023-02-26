async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 10;
}
  
function f() {
    let result;

    result = wait().status; //не то

    return result;
}

console.log( f() );