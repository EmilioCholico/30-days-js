const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const context = canvas.getContext("2d");
const carrusell = document.querySelector(".strip");
const images = [...document.querySelectorAll(".image")];


navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
        video.play();
        function draw() {
            context.drawImage(video, 0, 0, canvas.width, canvas.height)
            requestAnimationFrame(draw)
        }
        video.addEventListener("loadedmetadata", () => {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            draw();
        })
    })
    .catch((error) => {
        console.error("Error accesing the camera: ", error)
    })

const takePhoto = () => {
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageCaptured = canvas.toDataURL("image/png");

    const newDiv = document.createElement("img");
    newDiv.className = "image";
    newDiv.src = `${imageCaptured}`;
    newDiv.style.width = `${canvas.width / 5}px`;
    newDiv.style.height = `${canvas.height / 4}px`

    carrusell.appendChild(newDiv)
};

images.forEach(image => {
    image.addEventListener("click", e => {
        const element = e.target;
        console.log(element)
    })
})


