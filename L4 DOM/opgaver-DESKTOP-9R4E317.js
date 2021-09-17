// select every element and store it in bodyElements
const bodyElements = document.getElementsByTagName("*");
const headElements = document.querySelectorAll("h1");
const paraElements = document.querySelectorAll("p");
const listElements = document.querySelectorAll("li");

const all = document.all;

// const undElement = document.getElementsByClassName("und");
// const secElement = document.getElementsByClassName("sec");

// opgave 4.1 - change every section to red, except header
for (let el of bodyElements) {
    el.style.color = "red";
}
for (let el of headElements) {
    el.style.color = "black";
}
// 4.2 - change every second element to brown
for (let i = 0; i < bodyElements.length; i++) {
    // console.log(bodyElements[i].getElementsByTagName("H1").item(1) === bodyElements[i].tagName)
}

// 4.3 - give every second element the list a brown baggrundcolor
for (let i = 0; i < listElements.length; i++) {
    if (i % 2 === 0) {
        listElements[i].style.backgroundColor = "#CDCDCD";
    } else {
        listElements[i].style.color = "red";
    }
} 

// 4.4 - give every section after a headline a subheading
// for (let i = 0; i < undElement.length; i++) {
//     undElement[i].style.color = "blue";
//     undElement[i].style.fontSize = "25px";
//     undElement[i].style.fontWeight = "bold";
// }


