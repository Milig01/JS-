/*Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:
*/
async function loadJson(url) {
    let result;
    let response = await fetch(url);

    if (response.status == 200) {
        result = await response.json();
    } else {
        result = new Error(response.status);
    }

    return result;
}
  
loadJson('no-such-user.json') // (3)
    .catch(console.log); 