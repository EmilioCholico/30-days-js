const divHidden = document.querySelector(".hidden");
const navBar = document.querySelector(".nav-bar");

// function throttle(callback, limit = 8) {
//     let waiting = false;
//     return function() {
//         if (!waiting) {
//             callback.apply(this, arguments);
//             waiting = true;
//             setTimeout(() => waiting = false, limit)
//         }
//     }
// }


document.addEventListener("scroll", () => {
    const navBarTop = navBar.getBoundingClientRect().top;

    if(navBarTop <= 0){
        const scrollPercentage = Math.min(Math.max(window.scrollY / 400 * 80 - 80, 0), 100);
        console.log(scrollPercentage)
        divHidden.style.width = `${scrollPercentage}%`
        navBar.style.boxShadow = "1px 1px 1px #000"
    } else {
        divHidden.style.width = "0%"
    }
 });