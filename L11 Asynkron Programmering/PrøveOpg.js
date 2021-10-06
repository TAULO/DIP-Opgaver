const isMomHappy = true;

//promise 
const willIgetNewPhone = new Promise((resolve, reject) => {
    if(isMomHappy) {
        const phone = {
            brand: "Samsung", 
            color: "Blue"
        };
        resolve(phone); 
    } else {
        const fejl = new Error("Mor er ikk glad");
        reject(fejl);
    }
});

const askMom = function() {
    willIgetNewPhone
    .then(message => console.log(message))
    .catch(error => console.log(error.message));
}

askMom();