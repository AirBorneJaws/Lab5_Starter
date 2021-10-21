// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var jsConfetti = new JSConfetti();
  var element = document.getElementById("horn-select");

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
}