const addKnap = document.getElementById("btn_tilføj")
const input = document.getElementById("input_værktøj")
const table = document.getElementById("table")

const data = [
            {navn: "hammer", antal: 5},
            {navn: "Sav", antal: 7},
            {navn: "Boremaskine", antal: 2}
]

async function postArr() {
    await fetch("/tools", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then(res => console.log("Request completed!", res.status))    
}

addKnap.addEventListener("click", () => {
    // console.log(hasName(data))

    // data.forEach((e, i) => {
    //     console.log(data[i].navn.includes(input.value))
    // })

    console.log(hasName(data, input.value))
    console.log(input.value)
    data.push({navn: input.value, antal: 1})
    postArr()
    console.log(data)
})

function hasName(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].navn.includes(val)) {

        } else {

        }
    }
}

