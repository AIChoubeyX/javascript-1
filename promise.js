//resolve and reject are the two outcome of promises
const girlpromise = new Promise((resolve, reject) => {
    let parentdecision = false
    if (parentdecision) {
        resolve("ooh yeah!!")
    } else {
        reject("ohh no!!")
    }
});
girlpromise.then((msg) => {
    console.log("girl message", msg)
    console.log("lets book the wedding venue")
}).catch((msg) => {
    console.log("girl message", msg)
    console.log("tinder kha ho yarr")

})