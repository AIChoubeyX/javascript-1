const promisefour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve(
                {
                    username: "choubey jii",
                    password: "123"
                })
        } else {
            reject('ERROR: something went wrong')
        }
    }, 2000)
})
promisefour.then((user) => {
    console.log(user);
    return user.username
})
    .then((username) => {
        console.log(username)
    })
    .catch(function (error) {
        console.log(error)
    })
    .finally(() => {
        console.log(" the promie is either completed or not completed")
    })