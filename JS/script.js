function clicked(){
  var key=this.innerHTML;
  console.log(key);
  makesound(key);
  animation(key);

}
function makesound(key){
  switch(key){
    case ("w"):
      new Audio("./sounds/tom-1.mp3").play()
      break;
    case ("a"):
        new Audio("./sounds/tom-2.mp3").play()
     break;
    case ("s"):
       new Audio("./sounds/tom-3.mp3").play()
     break;
    case ("d"):
        new Audio("./sounds/tom-4.mp3").play()
     break;
    case ("j"):
       new Audio("./sounds/crash.mp3").play()
     break;
    case ("k"):
         new Audio("./sounds/kick-bass.mp3").play()
      break;
    case ("l"):
        new Audio("./sounds/snare.mp3").play()
     break;
  }
}
function pressed(event){
  console.log(event.key);
  makesound(event.key);
  animation(event.key);
}
var x=document.querySelectorAll("button");
for(var i=0; i<x.length; i++){
  x[i].addEventListener("click",clicked);
}
document.addEventListener("keydown", pressed);
function animation(key){
  var classToModify="."+key+"-button";
  console.log(classToModify);
  document.querySelector(classToModify).classList.add("pressed");
  setTimeout(function(){
    document.querySelector(classToModify).classList.remove("pressed");
  },100)
}
