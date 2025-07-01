const hero = document.querySelector(".hero");
const title = document.querySelector("h1");

function shadow(e) {
    const centerX = title.offsetLeft + (title.offsetWidth / 2); //319
    const centerY = title.offsetTop + (title.offsetHeight / 2); //473.5
    const topShadowLeft = (e.x - centerX) / 4 ;
    const topShadowTop = (e.y - centerY) / 4 ;
    const bottomShadowLeft = (-e.x + centerX ) / 4 ;
    const bottomShadowTop = (-e.y + centerY) / 4 ;
    const leftShadowLeft = (-e.y + centerY) / 3 ;
    const rightShadowTop = (e.y - centerY) / 3 ;
    title.style.textShadow = `${topShadowLeft}px ${topShadowTop}px 10px rgb(4, 255, 13), ${bottomShadowLeft}px ${bottomShadowTop}px 10px rgba(0,0,0,1), ${rightShadowTop}px ${bottomShadowLeft}px 10px rgb(230, 15, 15), ${leftShadowLeft}px ${topShadowLeft}px 10px rgb(34, 31, 202)`;

}

hero.addEventListener("mousemove", shadow);