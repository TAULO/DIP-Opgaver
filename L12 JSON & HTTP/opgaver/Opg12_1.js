//opgave 12.1
const earthquakeURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
const myTable = document.getElementById("myTable");
const styrke = document.createElement("tr");
const sted = document.createElement("tr");
const tid = document.createElement("tr");

function setup() {
    const styrkeHead = document.createElement("th");
    styrkeHead.innerHTML = "Styrke";
    styrke.appendChild(styrkeHead);

    const stedHead = document.createElement("th");
    stedHead.innerHTML = "Sted";
    sted.appendChild(stedHead);

    const tidHead = document.createElement("th");
    tidHead.innerHTML = "Tidspunkt";
    tid.appendChild(tidHead);

    myTable.appendChild(styrke);
    myTable.appendChild(sted);
    myTable.appendChild(tid);
}

async function get() {
    const response = await fetch(earthquakeURL);
    const data = await response.json();

    console.log(data.features);

    let quakeData = data.features
    .filter(quakes => quakes.properties.mag >= 5)
    .sort((a, b) => a.properties.mag - b.properties.mag)
    .forEach((quakes) => {
        styrke.insertCell().innerHTML = quakes.properties.mag
        sted.insertCell().innerHTML = quakes.properties.place;
        tid.insertCell().innerHTML = quakes.properties.time;
    })

    console.log(quakeData)
}
setup();
get();



