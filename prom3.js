const promisethree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            name: "ashutosh choubey",
            email: "ashutoshchoubey2004@gmail.com",
        })

    }, 1000)
})
promisethree.then(function (user) {
    console.log(user);
})