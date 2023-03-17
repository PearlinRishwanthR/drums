var selectAll = document.querySelectorAll(".drum").length;

for (var i = 0; i < selectAll; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var sound = new Audio("sounds/tom-1.mp3");
      sound.play();
      break;
    case "a":
      var sound = new Audio("sounds/tom-2.mp3");
      sound.play();
      break;
    case "s":
      var sound = new Audio("sounds/tom-3.mp3");
      sound.play();
      break;
    case "d":
      var sound = new Audio("sounds/tom-4.mp3");
      sound.play();
      break;
    case "j":
      var sound = new Audio("sounds/snare.mp3");
      sound.play();
      break;
    case "k":
      var sound = new Audio("sounds/crash.mp3");
      sound.play();
      break;
    case "l":
      var sound = new Audio("sounds/kick-bass.mp3");
      sound.play();
      break;

    default:
      break;
  }
}

function buttonAnimation(currentKey){
  var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100)
}