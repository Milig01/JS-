console.log( checkSpam('buy ViAgRA now') );
console.log( checkSpam('free xxxxx') );
console.log( checkSpam('innocent rabbit') );

function checkSpam(str) {
    let text = str.toLowerCase();
    
    if (text.includes('viagra') || text.includes('xxx')) {
        return true;
    } else return false;
}