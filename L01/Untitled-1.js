const list = [4,2,22,9,5,10];
const arrStr = ["1","2","6","9","5","10"];
let number; 

//arr num
for (let i = list.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
        if(list[j] > list[j + 1]) {
            let temp = list[j];
            list[j] = list[j+1];
            list[j + 1] = temp;
        }
    }
}

// opgave 1
//arr str
for (let i = arrStr.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
        if(arrStr[j] >+ arrStr[j + 1]) {
            let temp = arrStr[j];
            arrStr[j] = arrStr[j+1];
            arrStr[j + 1] = temp;
        }
    }
}

console.log("Arr numbers: " + list.toString());
console.log("Str arr: " + arrStr);

let startIndeks = 0;
let endIndeks = list.length - 1;
let indeksToFind = 9;

function binarySearch(indeksToFind) {
    while (startIndeks <= endIndeks) {
        let midIndeks = Math.floor(startIndeks + endIndeks) / 2;
        if (list[midIndeks] === indeksToFind) {
            return indeksToFind;
        }
        if (list[midIndeks] < indeksToFind) {
            startIndeks = midIndeks + 1;
        } else {
            endIndeks = midIndeks - 1;
        }
        return -1;
    }
}

console.log(binarySearch(4));
