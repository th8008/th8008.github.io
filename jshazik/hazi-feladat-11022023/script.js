let myName = "Agi";
let friendName = "Charlie";
console.log(myName, friendName);

const PI = 3.14159;
console.log(PI);

//PI = 3.1565;
console.log(PI);

let myTeacher = "Bálint";
let myAge = 53;
let isLegalAge = true;
let favoriteColor;
let semmi = null;

console.log(myTeacher, myAge, isLegalAge, favoriteColor, semmi);
// ez nem volt feladat, csak látni akarom, hogy jó-e mind.


let person = {
    nev: "Kovács János",
    kor: 28,
    varos: "Budapest"
};

console.log(person);


let birthPlace = "Budapest";
let upgrade;

console.log(birthPlace, upgrade);


let birthYearBaby = 2021;
let birthYearSon = 2010;
let birthYearDaughter = 2007;
let birthYearMom = 1988;
let birthYearDad = 1985;
let now = 2023;

let ageBaby = now - birthYearBaby;
console.log(ageBaby);
let ageSon = now - birthYearDaughter - 3;
console.log(ageSon);
let ageDaughter = (ageSon + now - birthYearMom) / 3;
console.log(ageDaughter);
console.log(ageBaby * ageSon);
let ageMom = now - birthYearMom;
console.log(ageMom / ageBaby);


alert("Üdvözöljük weboldalunkon!")


let firstName = prompt("Kérjük, adja meg a keresztnevét!");
alert("Kedves " + firstName + ", legyen szép napja!");


let birthYearUser = prompt("Kérjük, adja meg a születési évét!");
let legalAgeYear = now - 18;
if (birthYearUser >= legalAgeYear) {
    alert("Sajnos, ehhez a tartalomhoz Ön nem férhet hozzá!");
}

else {
    alert("Köszönjük! Ön hozzáférhet ehhez a tartalomhoz!");
}


console.log(120 + 2563);








