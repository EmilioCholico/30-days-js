const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const context = canvas.getContext("2d");
const carrusell = document.querySelector(".strip");
const snap = document.querySelector(".snap");
let images;


// document.addEventListener("click", () => {
//     context.filter = "hue-rotate(180deg)"

// })

// function redEffect(e) {
//         context.drawImage(video, 0, 0, canvas.width, canvas.height);
//         context.fillStyle = 'rgba(255, 0, 0, 0.6)'; 
//         context.globalCompositeOperation = 'multiply'; 
//         context.fillRect(0, 0, canvas.width, canvas.height);

//         context.globalCompositeOperation = 'source-over';

//         return requestAnimationFrame(redEffect);
// }

// function rgbSplit(imageData) {
//     const rOffset = 10;  // Desplazamiento para el canal Rojo
//     const gOffset = -10; // Desplazamiento para el canal Verde
//     const bOffset = 20;  // Desplazamiento para el canal Azul
    
//     const originalData = imageData.data;
//     const newData = new Uint8ClampedArray(originalData.length);
    
//     // Copiamos los datos originales primero
//     newData.set(originalData);
    
//     for (let i = 0; i < originalData.length; i += 4) {
//         // Solo modificamos los canales de color, no el alpha (i+3)
        
//         // Canal Rojo (R)
//         const rPos = i + rOffset * 4;
//         if (rPos >= 0 && rPos < originalData.length) {
//             newData[rPos] = originalData[i];
//         }
        
//         // Canal Verde (G)
//         const gPos = i + 1 + gOffset * 4;
//         if (gPos >= 0 && gPos < originalData.length) {
//             newData[gPos] = originalData[i + 1];
//         }
        
//         // Canal Azul (B)
//         const bPos = i + 2 + bOffset * 4;
//         if (bPos >= 0 && bPos < originalData.length) {
//             newData[bPos] = originalData[i + 2];
//         }
//     }
    
//     // Devolvemos los nuevos datos
//     return new ImageData(newData, imageData.width, imageData.height);
// }

function playVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(stream => {
            video.srcObject = stream;
            video.play();
        })
        .catch((error) => {
            console.error("Error accesing the camera: ", error)
        })
}

function drawCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.height = height;
    canvas.width = width;

    setInterval(() => {
        context.drawImage(video, 0, 0, width, height);
        let pixels = context.getImageData(0, 0, width, height);
        // pixels = redEffect(pixels);
        // pixels = rgbSplit(pixels);
        // context.globalAlpha = 0.1;
        pixels = greenScreen(pixels);
        context.putImageData(pixels, 0, 0)
    }, 16);
}

function takePhoto() {
    snap.currenTime = 0;
    snap.play()
    const imageCaptured = canvas.toDataURL("image/png");

    carrusell.innerHTML += `<a href="${imageCaptured}" download="Selfie"><img class="image" src="${imageCaptured}" width="${canvas.width / 5}px" height="${canvas.height / 4}px"></img></a>`;
    images = [...document.querySelectorAll(".image")];
};

function redEffect(pixels) {
    for(let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 0] = pixels.data[i + 0] + 100; 
        pixels.data[i + 1] = pixels.data[i + 1] - 50;
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5;
    };
    return pixels;
};

function rgbSplit(pixels) {
    for(let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i - 150] = pixels.data[i + 0]; 
        pixels.data[i + 100] = pixels.data[i + 1];
        pixels.data[i - 150] = pixels.data[i + 2];
    };
    return pixels;
}

function greenScreen(pixels) {
    const levels = {};
    [...document.querySelectorAll('.rgb input')].forEach((input) => {
        levels[input.name] = input.value;
    });

    for(i = 0; i < pixels.data.length; i += 4) {
        red = pixels.data[i + 0];
        green = pixels.data[i + 1];
        blue = pixels.data[i + 2];
        alpha = pixels.data[i + 3];

        if(red >= levels.rmin
            && green >= levels.gmin
            && blue >= levels.bmin
            && red <= levels.rmax
            && green <= levels.gmax
            && blue <= levels.bmax) {
                pixels.data[i + 3] = 0;
            }
        }
        return pixels;
}

carrusell.addEventListener("click", e => {
    console.log(e.target)
})

playVideo()

video.addEventListener("canplay", drawCanvas);



