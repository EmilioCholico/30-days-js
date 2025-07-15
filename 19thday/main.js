const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
const notepad = document.querySelector(".notes");
let ultimaPalabra = '';

recognition.continious = true;
recognition.lang = 'es-MX'
recognition.interimResults = true;

recognition.onstart = () => {
    speaking = true;
    console.log("Start speech")
}

recognition.onresult = (event) => {
    const last = event.results.length -1;
    const result = event.results[last];
    let parrafo = notepad.appendChild(document.createElement("p"))

    if(!result.isFinal) {
        const textoActual = result[0].transcript.trim();

        const palabras = textoActual.split(" ");
        const nuevaPalabra = palabras[palabras.length - 1];

        if(nuevaPalabra && nuevaPalabra !== ultimaPalabra) {
            console.log("Palabra nueva:", nuevaPalabra);
            ultimaPalabra = nuevaPalabra;
            parrafo.textContent += ultimaPalabra;
        }
    } else {
        const fraseCompleta = result[0].transcript;
        console.log("Frase completa:", fraseCompleta);
        ultimaPalabra = '';
    }
};

recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
};

recognition.onend = () => {
    recognition.start()
}


function procesar() {
        recognition.start();
}