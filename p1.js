let istatus = document.querySelector("h5")
let addFriend= document.querySelector("#add friend")
let suii=0
addFriend.addEventListener("click", function(){
  if(suii==0){
  istatus.innerHTML="friends"
  istatus.style.color="green"
  suii=1
  }
  else{
    istatus.innerHTML="Stranger"
    istatus.style.color="red"
    suii=1
    
  }
})
