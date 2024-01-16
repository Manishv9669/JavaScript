const name = "John";
const repoCount = "55";

// console.log(`My name is ${name} and i have total ${repoCount} repos`);

const gameName = new String("Hello-Froggy-Pro")
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('l'));

const newString = gameName.substring(0, 3)
console.log(newString);

const anotherString = gameName.slice(-11, 5)
console.log(anotherString);

const newStringOne = "   Froggy   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.froggy.com/froggy%20pro"
console.log(url.replace('%20', '-'));
console.log(url.includes("froggy"))

console.log(gameName.split('-'))
