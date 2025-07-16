const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
let p = document.createElement('p');
const notepad = document.querySelector(".notes");
notepad.appendChild(p)

recognition.continious = true;
recognition.lang = 'es-MX'
recognition.interimResults = true;

recognition.addEventListener("result", e => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
        p.textContent = transcript;
        if (e.results[0].isFinal) {
            p = document.createElement('p');
            notepad.appendChild(p);
        }
});


recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
};

recognition.onend = () => {
    recognition.start()
}


recognition.start();