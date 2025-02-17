// group of three friends going to goa....make a code using promises
//math.random is a inbuilt fuction which randomly set any time between 0-1
// if any of the promise work code with learn...we use any
const f1promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve("friend 1: hey i am in for goa!")
        } else {
            reject("friend 1:sorry i cant come")
        }

    }, 3000)
})
const f2promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve("friend 2: hey i am in for goa!")
        } else {
            reject(" friend 2:nhi ayenge jo krna hai kr le!")
        }

    }, 2000)
})
const f3promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve("friend 3: hey i am in for goa!")
        } else {
            reject("friend 3:go to hell i dont care !!")
        }

    }, 4000)
})
Promise.all([f1promise, f2promise, f3promise]).then((msg) => {
    console.log(msg)
    console.log(" yeee goa is on!!")
}).catch((msg) => {
    console.log(msg)
    console.log(" goa cancel guyss")
})