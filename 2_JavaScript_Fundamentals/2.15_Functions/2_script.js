let age = 17;

checkAgeQ(age);
checkAgeI(age);

function checkAgeQ(age) {
    return age > 18 ? true : confirm('Родители разрешили?');
}

function checkAgeI(age) {
    return age > 18 || confirm('Родители разрешили?');
}