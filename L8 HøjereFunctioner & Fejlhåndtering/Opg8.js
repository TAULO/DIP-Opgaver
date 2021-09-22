// opgave 8.1
let personer = [
    {
        navn : "Casper", 
        alder : 20,
        mobilnummer : "2244556677"
    },
    {
        navn : "Oliver", 
        alder : 35,
        mobilnummer : "8899001122"
    },
    {
        navn : "Tobias", 
        alder : 25,
        mobilnummer : "7766882200"
    },
    {
        navn : "Rasmus", 
        alder : 15, 
        mobilnummer : "1721927182"
    }
];

console.log(personer)

// find person med bestemt telefon nr
let findTelefonNr = personer.find((person) => person.mobilnummer === "2244556677");
console.log("Bestemt telefonnr: " + findTelefonNr.navn);

// find den mindste alder 
let findMindsteAlder = personer.reduce((prev, curr) => prev.alder < curr.alder ? prev : curr)
console.log("Mindste alder: " + findMindsteAlder.navn);

// giv hvert object person en fortløbende ID 
let givID = personer.forEach((element, id = 0) => element.id = id + 1);
console.log(personer);

// Generer en tekststreng, der indeholder personernes navne – kommasepareret og i sorteret rækkefølge
let navneStreng = "";
personer.sort((element1, element2) => {
    if (element1.navn < element2.navn) {
        return -1;
    } else if (element1.navn > element2.navn) {
        return 1;
    } else {
        return 0
    } 
});
const tekstStreng = personer.forEach((element, index) => {
    index >= personer.length - 1 ? navneStreng += element.navn : navneStreng += element.navn + ", ";
});
console.log(navneStreng)

// generer et array med navn og mobilnummer på de personer, der er yngre end 30
let personerUnder30 = [];
const aldreOver30 = personer.forEach((element) => {
    if (element.alder < 30) {
        personerUnder30.push(element.navn + " " + element.mobilnummer)
    }
});
console.log(personerUnder30);

// opgave 8.2
function compare(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}

function compareSort(compare) {
    
}

let arrStrenge = ["Hej", "Med", "Dig", "Har", "Du", "En", "God", "Dag"];
compareSort(arrStrenge);
console.log(arrStrenge)