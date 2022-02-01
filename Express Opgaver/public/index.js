let data = [{alder: 22, højde: 155},
            {alder: 55, højde: 180},
            {alder: 12, højde: 157},
            {alder: 25, højde: 195},
            {alder: 90, højde: 176},
            {alder: 13, højde: 165}]

const table = document.getElementById("table")
const alderTable = document.getElementById("alder")
const højdeTable = document.getElementById("højde")

const gennesnitAlderTable = table.appendChild(document.createElement("tr").insertCell())
const gennesnitHøjdeTable = table.appendChild(document.createElement("tr").insertCell())

let alderLængde = data.length + 1
function beregnAlderGennemsnit() {
    let alder = 0;
    data.forEach((data) => {
        alder += data.alder
    })
    alderLængde--;
    console.log("Alder: " + alderLængde)
    return alder / alderLængde
}

let højdeLængde = data.length + 1;
function beregnHøjdeGennemsnit() {
    let højde = 0;
    data.forEach((data) => {
        højde += data.højde
    })
    højdeLængde--;
    console.log("Højde: " + højde)
    return højde / højdeLængde
}

// inserts a cell for every age and heigth and adds age and height
for (let i = 0; i < data.length; i++) {
    alderTable.appendChild(document.createElement("tr")).insertCell().innerHTML = data[i].alder + " år"
    højdeTable.appendChild(document.createElement("tr")).insertCell().innerHTML = data[i].højde + " cm"
}

    gennesnitAlderTable.innerHTML = beregnAlderGennemsnit()
    gennesnitHøjdeTable.innerHTML = beregnHøjdeGennemsnit()


    alderTable.addEventListener("click", e => {
        const target = e.target.innerHTML.split(" ")[0]
        const index = data.findIndex(ele => ele.alder == target)
        data[index].alder = 0;
        alderTable.removeChild(e.target.parentNode);
        gennesnitAlderTable.innerHTML = beregnAlderGennemsnit()  
    })    

    højdeTable.addEventListener("click", e => {
    const target = e.target.innerHTML.split(" ")[0]
    const index = data.findIndex(ele => ele.højde == target)
    data[index].højde = 0;
    højdeTable.removeChild(e.target.parentNode);
    gennesnitHøjdeTable.innerHTML = beregnHøjdeGennemsnit()
})


