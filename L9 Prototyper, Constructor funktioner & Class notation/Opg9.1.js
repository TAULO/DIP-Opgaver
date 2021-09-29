// opgave 9.1 
class Person {
    constructor(navn) {
        this.navn = navn;
    }
    toString() { return this.navn }
    equals(p) { return p.navn === this.navn && p.constructor === Person }    
    compare(p1, p2) { return p1.navn > p2.navn }
}

class Studerende extends Person {
    constructor(navn, id) {
        super(navn);
        this.id = id;
    }
    equals(s) { return s.navn === this.navn && s.id === this.id && s.constructor === Studerende }
}

class Kat {
    constructor(navn) {
        this.navn = navn;
    }
}

let person1 = new Person("Simon");
let person2 = new Person("Simon");
let person3 = new Person("Josefine");
let person4 = new Person("Caroline");

let studerende1 = new Studerende("Casper", 1);
let studerende2 = new Studerende("Casper", 1);
let studerende3 = new Studerende("Fin", 2);
let studerende4 = new Studerende("Sigurd", 3);

let kat1 = new Kat("Mewosa");
let kat2 = new Kat ("MGK");



// tjekker om to personer er det samme
console.log(person1.equals(person2));

// sammenligner to personer
console.log(person1.compare(person2, person3));

// tjekker om to studerende er det samme
console.log(studerende1.equals(studerende2));

// sammenligner to studerende 
console.log(studerende1.compare(studerende2, studerende3));

let personer = [person1, person2, person3, person4, studerende1, studerende2, studerende3, studerende4, kat1, kat2];

personer.sort((a, b) => a.navn > b.navn ? 1 : -1) 
console.log(personer);