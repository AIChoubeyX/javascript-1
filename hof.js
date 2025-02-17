function operation( funof,a,b){
    return funof(a,b)
}
function add(a,b){
    return a+b
}
let result = operation( add,7,8)
console.log(result)