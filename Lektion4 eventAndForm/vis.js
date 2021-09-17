const body = document.querySelector("body");
const inputNode = document.querySelectorAll("input");
const labelNode = document.createElement("label");
const btnNode = document.querySelector("button");

body.append(labelNode);
body.append(btnNode);
labelNode.append(inputNode[0]);
labelNode.append(inputNode[1]); 


let onAction1 = () => {
    let val = Math.random() * 100;
    if (Math.round(val) === 0) {
        val = Math.random * 10;
        inputNode[0].value = Math.round(val) + 1;
    } else {
        inputNode[0].value = Math.round(val);
    }
}

let onAction2 = () => {
    let val = Math.random() * 100;
    if (Math.round(val) === 0) {
        val = Math.random * 10;
        inputNode[1].value = Math.round(val) + 1;
    } else {
        inputNode[1].value = Math.round(val);
    }
}

let buttonAction = () => {
    inputNode[0].value = "";
    inputNode[1].value = "";
}

inputNode[0].addEventListener("click", onAction1);
inputNode[1].addEventListener("click", onAction2);
btnNode.addEventListener("click", buttonAction);

