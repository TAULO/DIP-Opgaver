let arr = [2,5,11,1,10];

// opgave 2.1 - find max i array
let maxNumber = (Array) => {
    return Math.max.apply(null, Array);
}
console.log(maxNumber(arr));

//opgave 2.1 - find element i array
let contains = (Array) => {
    for (let n of Array) {
        console.log(Array[n]);
        if (Array[n] == element) {
            return true;
        } else {
            n++;
        }
    }
}
console.log(contains(arr, 2));

//opgave 2.1 - retunere sum i array
let sum = (Array) => {
    let result = 0;
    for (let n in array) {
        result += array[n];
    }
    return result;
}
console.log(arr);