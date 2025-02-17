/**async function getMessage() {
    return "hello students"
}
getMessage().then(result => console.log(result))**/
console.log(" hello from the begining")
async function print() {
    console.log(" print first line")
    let data = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hello students")

        }, 3000)
    })
    let result = await data //start waiting for data promise to be completed
    console.log(result)
    console.log("print last line")
}
print()
console.log("hello from the end")