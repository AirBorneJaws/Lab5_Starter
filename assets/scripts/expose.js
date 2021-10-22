// expose.js

window.addEventListener('DOMContentLoaded', init);
function init() {
  // TODO
  var jsConfetti = new JSConfetti();
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

  soundB.addEventListener("click",function()
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