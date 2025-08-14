const synth = window.speechSynthesis;
let voices = synth.getVoices();
const options = document.getElementById("options");
const stopButton = document.querySelector(".stop")
const speakButton = document.querySelector(".speak")
const textArea = document.getElementById("texts-speech");
const rangesOptions = document.querySelectorAll("input");

function loadVoices() {
    voices = synth.getVoices();
    options.innerHTML = '';
    voices.forEach(voice => {
        options.innerHTML += `<option value="${voice.name}">${voice.name}</option>`
    })
}

synth.onvoiceschanged = loadVoices;
loadVoices();

const speechText = () => {
    if (!textArea.value.trim()) {
        alert("Porfavor ingresa un texto");
        return;
    }

    if(synth.paused) {
        synth.resume();
    } else {
        let text = new SpeechSynthesisUtterance(textArea.value);
        text.lang = "es-MX";
        voices = synth.getVoices();
        text.voice = voices.find(voice => voice.name === options.selectedOptions[0].value);
        rangesOptions.forEach(option => {
            option.addEventListener("change", e => {
                if(option === rangesOptions[0]) {
                    text.rate = this.value;
                    synth.cancel();
                    synth.speak(text);
                } else {
                    text.pitch = (this.value);
                    synth.cancel();
                    synth.speak(text);
                }
            })
        })
        console.log(text)
        synth.speak(text);
    }
}

function speechPause() {
    synth.pause();
    console.log(synth)
}


console.log(synth)