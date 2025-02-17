const promiseone = new Promise((resolve,reject)=>{
    setTimeout(function(){
        console.log("task completed")
        resolve()

    },2000)
})
promiseone.then(function(){
    console.log("promise consumed")
})
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("sync task 2 complete")
        resolve()
    },2000)
}).then(function(){
    console.log("resolved")
})
