//opgave 12.1
const earthquakeURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
const myTable = document.getElementById("myTable");

function createElement(element) {
    return document.createElement(element);
}

let quakes = [];
let sted = [];
let tidspunkt = [];
async function get() {
    const response = await fetch(earthquakeURL);
    const data = await response.json();

    console.log(data.features)

    for (let i = 0; i < data.features.length; i++) {
        quakes[i] = data.features[i].properties.mag;
        sted[i] = data.features[i].properties.place;
        tidspunkt[i] = data.features[i].properties.time;
        if (data.features[i].properties.mag > 5) {
            myTable.insertRow().insertCell();   
            myTable.insertBefore().insertCell();
        }
    }

    quakes = quakes.filter(quake => quake > 5).sort((a, b) => a - b);
    for (let i = 1; i < quakes.length; i++) {
        myTable.rows[i].cells[0].innerHTML = quakes[i]; 
    }
    // for (let i = 1; i < quakes.length; i++) {
    //     myTable.rows[i].cells[0].innerHTML = quakes[i]; 
    // }
}
get();

