const promisefive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve(
                {
                    username: "choubey jii",
                    password: "123",
                })
        } else {
            reject('ERROR: something went wrong')
        }
    }, 2000)
})
async function consumePromisefive() {
    try {
        const response = await promisefive
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}
consumePromisefive()