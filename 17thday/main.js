const videos = [...document.querySelectorAll("li[data-time]")];

const sumaTiempo = e => {
    const totalSeconds = 
    e.reduce((ac, time) => {
        let [min, sec] = time.dataset.time.split(":").map(Number);
        return ac + min *60 + sec;
    }, 0);

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    console.log(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
} 

sumaTiempo(videos);