//opgave 12.1
const earthquakeURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
const table = document.getElementsByTagName("table");

function createElement(element) {
    return document.createElement(element);
}

async function get() {
    const response = await fetch(earthquakeURL);
    data = await response.json();

    for (let i = 0; i < data.features.length; i++) {
        if (data.features[i].properties.mag > 5) {
            table[0].insertRow().insertCell();
        }
    }
    console.log(data.features)

    for (let i = 0; i < data.features.length; i++) {
        if (data.features[i].properties.mag > 5) {
           
        }
    }
}

get();