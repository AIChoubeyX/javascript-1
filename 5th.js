// when you cant procced to next step without the completion of previous step is called synchronous javascript is also synchronous in nature
// when you can procced to next step without the completion of previos one is called asynchronous
//example of synchronous
console.log("hello from th first line")
function hello(){
    console.log("hello from the function")
}
hello()
console.log(" hello from the last line")
//example of asynchronous
console.log("hii")
setTimeout(()=>{
    console.log("hello")
}, 3000)
console.log("bye!!")
myself={
    name:"ashutosh",
    profession:"engineering",
    age:20,
    address:{
        city:"kolkata",
        state:"west bengal",
        locality:"konnagar"
    }
}
console.log(myself)