// expose.js

window.addEventListener('DOMContentLoaded', init);
function init() {
  // TODO
  var jsConfetti = new jsConfetti();
  var element = document.getElementById("horn-select");
  var soundB= document.querySelector('button');
  var slideB = document.getElementById("volume");

  element.addEventListener("change",function()
  {
    var text = element.options[element.selectIndex].text;
    var image = document.querySelector('img');
    var sound = document.getElementsByClassName("hidden");

    if (text == "Air Horn")
    {
      image.src='assets/images/air-horn.svg';
      sound.src='assets/audio/air-horn.mp3';
    }
    else if (text == "Car Horn")
    {
      image.src = 'assets/images/car-horn.svg';
      sound.src='assets/audio/car-horn.mp3';
    }
    else if (text == "Party Horn")
    {
      image.src='assets/images/party-horn.svg';
      sound.src='assets/audio/party-horn.mp3';
    }
    else
    {
      image.src='assets/images/no-image.png';
    }
  });

  soundButton.addEventListener("click",function()
  {
    var sound2 = document.getElementsByClassName("hidden");
    var audio = new Audio(sound2.src);
    audio.volume = dcment.getElementById("volume").value/100;
    if (audio.volume==0)
    {

    }
    if (document.getElementById("horn-select").options[CustomElementRegistry.selectedIndex].text=="Party Horn")
    {
      jsConfetti.addConfetti();
      audio.play();
    }
    else 
    {
      audio.play();
    }

  });
  

  


}