// select every element and store it in bodyElements
const everyElement = document.getElementsByTagName("*");
const paraElements = document.querySelectorAll("p");
const listElements = document.querySelectorAll("li");

// opgave 4.1 - change every section to red
for (let i = 0; i < everyElement.length; i++) {
    if (everyElement[i].tagName === "H1") {
        everyElement[i].style.color = "black";
    } else {
        everyElement[i].style.color = "red";
    }
}

// 4.2 - change every second element to brown 
for (let i = 0; i < everyElement.length; i++) {
    if (everyElement[i].tagName === "H1") everyElement[i + 2].style.color = "brown";
}

// 4.3 - give every second element the list a brown baggrundcolor
for (let i = 0; i < listElements.length; i += 2) {
    listElements[i].style.backgroundColor = "brown";
}

// 4.4 - give every section after a headline a subheading
for (let i = 0; i < everyElement.length; i++) {
    if (everyElement[i].tagName === "H1") {
        everyElement[i + 1].style.color = "blue";
        everyElement[i + 1].style.fontSize = "25px";
        everyElement[i + 1].style.fontWeight = "bold";
    }
}


