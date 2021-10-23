// explore.js

window.addEventListener('DOMContentLoaded', init);
var voices = [];
var smilyFace = document.querySelector('img');
function populateVoiceList() {
  if(typeof speechSynthesis === 'undefined') {
    return;
  }

  voices = speechSynthesis.getVoices();

  for(var i = 0; i < voices.length; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    document.getElementById("voice-select").appendChild(option);
  }
}

function init() {
  // TODO
  populateVoiceList();
if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

  var button = document.querySelector('button');

  button.addEventListener("click",function()
  {
    var inputText=document.getElementById('text-to-speak');
    var voiceSelect = document.getElementById("voice-select");
    var dataName = voiceSelect.selectedOptions[0].getAttribute('data-name');
    var utter = new SpeechSynthesisUtterance(inputText.value);

    for (var i=0;i<voices.length;i++)
    {
      if(voices[i].name===dataName)
      {
        utter.voice=voices[i];
      }
    }
    speechSynthesis.speak(utter);
    if(speechSynthesis.speaking)
    {
      smilyFace.src='assets/images/smiling-open.png';
    }
    utter.addEventListener('end', function () 
    {
      smilyFace.src = 'assets/images/smiling.png';
    })
  });
}