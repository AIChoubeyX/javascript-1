/*creating a object using curely brackets in the form of key and value*/
const myself ={
    name:"ashutosh choubey",
    age: 19,
    class: "college",
    favouritefood: "samosa",
}
console.log(myself)
//accesing the data
console.log(myself.name)
//adding new data
myself.country="india";
myself.continent="ASIA";
console.log(myself)
delete myself.continent
console.log(myself)
for( let key in myself){
    console.log(key,"=>", myself[key])
}
//for cloning
const newme= Object.assign({}, myself)
console.log(newme)
const newme1= Object.assign({}, myself ,{role: "opening batsmen" })
console.log(newme1)