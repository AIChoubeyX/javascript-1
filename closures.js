function outer(){
    let outervar="choubey jii"
    function inner(){
        console.log(outervar)
    }
    return inner()
}
outer()