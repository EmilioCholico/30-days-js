const recognition = new webkitSpeechRecognition ();
let speaking = false;
const notepad = document.querySelector(".notes");

recognition.continious = true;
recognition.lang = 'es-MX'
recognition.interimResults = false;

recognition.onstart = () => {
    speaking = true;
    console.log("Start speech")
}

recognition.onresult = (event) => {
    for (let i = event.resultIndex; i < event.results.lenght; i++) {
        if(event.results[i].isFinal) notepad.innerHTML += `<p>${event.results[i][0].transcript}</p><br>`;
    }
}

recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
};

recognition.onend = () => {
    speaking = false;
    console.log("Speech recognition endeed.");
}

function procesar() {
    if(!speaking) {
        recognition.start();
    } else {
        recognition.stop();
    }
}