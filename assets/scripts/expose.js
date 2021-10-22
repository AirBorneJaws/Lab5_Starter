// expose.js

window.addEventListener('DOMContentLoaded', init);
var jsConfetti = new JSConfetti();

function init() {
  // TODO
  var element = document.getElementById("horn-select");


  element.addEventListener("change",function()
  {
    var text = element.options[element.selectedIndex].text;
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

  var soundB= document.querySelector('button');
  soundB.addEventListener("click",function()
  {
    var sound = document.getElementsByClassName("hidden");
    var audio = new Audio(sound.src);
    audio.volume = document.getElementById("volume").value/100;
    if (audio.volume==0)
    {
      return;
    }
    if (document.getElementById("horn-select").options[element.selectedIndex].text=="Party Horn")
    {
      jsConfetti.addConfetti();
      audio.play();
    }
    else 
    {
      audio.play();
    }

  });

  var slideB = document.getElementById("volume");
  slideB.addEventListener("change",function()
  {
    var volumeInc = document.getElementById("volume-controls");
    var speakerImage = volumeInc.querySelector('img');
    if(slideB.value==0)
    {
      speakerImage.src='assets/icons/volume-level-0.svg';
    }
    else if(slideB.value>=1 && slideB.value<33)
    {
      speakerImage.src='assets/icons/volume-level-1.svg';
    }
    else if(slideB.value>=33 && slideB.value<67)
    {
      speakerImage.src='assets/icons/volume-level-2.svg';
    }
    else if(slideB.value>=67)
    {
      speakerImage.src='assets/icons/volume-level-3.svg';
    }
  });

  


}