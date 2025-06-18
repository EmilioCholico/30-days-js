const canva = document.getElementById("draw");
const ctx = canva.getContext("2d");
canva.width = window.innerWidth;
canva.height = window.innerHeight;
let isDrawing = false;
let x = 0;
let y = 0;
let anguloHue = 0;
let incremento = true;
let anchoPunto = 0
ctx.c = 'destination-over';

const dibujar = (e) => {
    if(!isDrawing) return; 
    const rect = canva.getBoundingClientRect();
    const newX = e.touches[0].clientX - rect.left;
    const newY = e.touches[0].clientY - rect.top;
    ctx.beginPath();
    ctx.lineWidth = anchoPunto;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round'; 
    ctx.moveTo(x, y);
    ctx.lineTo(newX, newY);
    ctx.strokeStyle = `hsl(${anguloHue}, 100%, 50%)`;
    ctx.stroke();
    x = newX;
    y = newY;
    anguloHue += 1;
    if (anguloHue == 360) anguloHue = 0;
    if (incremento) {
        anchoPunto += 1;
        if (anchoPunto >= 100) incremento = false;
    } else {
        anchoPunto -= 1;
        if (anchoPunto <= 0) incremento = true;
    }
}

canva.addEventListener("touchstart", (e) => {
    e.preventDefault()
    isDrawing = true;
    const rect = canva.getBoundingClientRect();
    x = e.touches[0].clientX - rect.left;
    y = e.touches[0].clientY - rect.top;
})

canva.addEventListener("touchmove", dibujar);


canva.addEventListener("touchend", () => isDrawing = false)