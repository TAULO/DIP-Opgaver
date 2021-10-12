//opgave 12.1
const earthquakeURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

console.log("hello");

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) 
            throw new Error(respons.status);
        return await respons.json();
}

async function main(url) {
    try {
        let respons = await get(url);
        console.log(respons);
    } catch (fejl) {
        console.log(fejl);
    }
}
main(earthquakeURL);
get(earthquakeURL);