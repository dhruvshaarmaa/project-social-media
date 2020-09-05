//randomly generating a username
const adjectives=[
    "fragile",
    "elegant",
    "arrogant",
    "hilarious",
    "unknown",
    "enormous",
    "rhetorical"
]
const characters=[
    "meliodas",
    "shido",
    "issei",
    "hana",
    "miku",
    "tohka",
    "kurumi"
]
function generateRandomUsername(){
    const adj=adjectives[Math.floor(Math.random()*7)];
    const char=characters[Math.floor(Math.random()*7)];
    return `${adj}-${char}`;
}
/*
Test-Code
console.log(generateRandomUsername());
console.log(generateRandomUsername());
console.log(generateRandomUsername());
console.log(generateRandomUsername());
*/
module.exports={
    generateRandomUsername
}