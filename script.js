let mb=document.querySelector("#mode");
let currMode="light";

 mb.addEventListener("click" ,function(){
    if (currMode==='light'){
        currMode="dark";
        document.querySelector("body").style.backgroundColor="black"
       
    }
else{
    currMode="light";

    document.querySelector("body").style.backgroundColor="white"
}
console.log(currMode)
 })