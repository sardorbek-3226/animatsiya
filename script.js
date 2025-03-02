let ism = prompt("Ismingizni kiriting:");
let familya = prompt("Familyangizni kiriting:");
let yosh = Number(prompt("Yoshingizni kiriting:"));


console.log(` ismingiz ${ism}`);
console.log(` familya ${familya}`);
console.log(` yoshingiz ${yosh}`);



let son1 = Number(prompt("Birinchi sonni kiriting:"));
let son2 = Number(prompt("Ikkinchi sonni kiriting:"));

console.log(`Yig‘indi: ${son1 + son2}`);
console.log(`Ayirmasi: ${son1 - son2}`);

let son = Number(prompt("Sonni kiriting:"));
console.log(`Kvadrati: ${son ** 2}, Kubi: ${son ** 3}`);

let yil = Number(prompt("Tug‘ilgan yilingizni kiriting:"));
let hozirgiYil = new Date().getFullYear();
console.log(`Sizning yoshingiz: ${hozirgiYil - yil}`);
