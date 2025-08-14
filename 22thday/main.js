const links = [...document.querySelectorAll("a")];
const shadow = document.querySelector(".highlight")

links.forEach(link => {
    link.addEventListener("mouseover", e => {
        e.preventDefault();
        const coords = link.getBoundingClientRect();
        console.log(coords)
        const coord = {
            width: coords.width,
            height: coords.height,
            top: coords.top + window.scrollY,
            left: coords.left + window.scrollX
        }
        shadow.style.width = `${coord.width}px`;
        shadow.style.height = `${coord.height}px`;
        shadow.style.transform = `translate(${coord.left}px, ${coord.top}px)`;
        // shadow.style.top = `${coords.top}px`;
        // shadow.style.bottom = `${coords.bottom}px`;
        // shadow.style.right = `${coords.right}px`;
        // shadow.style.left = `${coords.left}px`;

    })
})