const controllers = document.getElementById("player");
const inputs = document.querySelectorAll("input[type='range']");
const ranges = document.querySelectorAll("[data-skip]");
const barraDesplazamiento = document.querySelector(".progress");
const video = document.querySelector(".viewer");
const progressBar = document.querySelector(".progress__filled");
const toggle = document.querySelector(".toggle")
const progress = document.querySelector(".progress")
let isUpdating = false;


const toggleControls = (show) => {
    const action = show ? 'remove' : 'add';
    const animations = show ? 'fadeIn' : 'fadeOut';
    inputs.forEach(input => {
        input.style.animation = `${animations} 0.5s forwards`;
        input.classList[action]('hidden')
    });
    ranges.forEach(button => {
        button.classList[action]('hidden')
        button.style.animation = `${animations} 0.5s forwards`;
    });
    toggle.classList[action]('hidden');
    toggle.style.animation = `${animations} 0.5s forwards`;
    barraDesplazamiento.classList[action]('hidden');
};


function skipRetrocess(){
    video.currentTime += parseFloat(this.dataset.skip)
}

const updateBar = () => {
    const barLength = 100 * (video.currentTime / video.duration)
    progressBar.style.width = `${barLength}%`


    if (!video.paused && !video.ended) {
        requestAnimationFrame(updateBar);
    } else {
        isUpdating = false;
    }
} 

const playPause = (e) => {
    const method = video.paused ? 'play' : 'pause';
    const content = video.paused ? '⏸︎' : '▶︎';
    video[method]()
    e.textContent = content;
}

function rangesUpdate() {
    video[this.name] = this.value
}

video.addEventListener("play", () => {
    if(!isUpdating){
        isUpdating = true;
        updateBar();
    }
});

const scrub = (e) => {
    video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
}

toggle.addEventListener("click", e => playPause(e.target))

ranges.forEach(input => {
    input.addEventListener("click",skipRetrocess)
});

inputs.forEach(input => {
    input.addEventListener("mousemove", rangesUpdate)
})

controllers.addEventListener('mouseenter', () => toggleControls(true));
controllers.addEventListener('mouseleave', () => toggleControls(false));

progress.addEventListener("click", e => scrub(e))
