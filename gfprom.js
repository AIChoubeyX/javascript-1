//asking you 3 gfs for a date on valentine...if anyone of them get ready you are good to go 
const gf1promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve("urvashi: hey we can go to goa!")
        } else {
            reject("urvasi:go to hell i dont care !!")
        }

    }, 1000)
})
const gf2promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve("janvi: we are good to go for a date!")
        } else {
            reject("janvi: hatt bkl muh dekha hai apna !!")
        }

    }, 2000)
})
const gf3promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve("tamana:common baby makes it memorable")
        } else {
            reject("tamana:no kalua not by any chance!!")
        }

    }, 4000)
})
Promise.any([gf1promise, gf2promise, gf3promise]).then((result) => {
    console.log(result)
    console.log("rohit: my valentine is sorted")
}).catch((msg) => {
    console.log(msg)
    console.log("rohit: lagta hai kuwara hi marunga")
})