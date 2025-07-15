const checkboxes = document.querySelectorAll("input")
const checkboxesArray = [...checkboxes];
const containers = document.querySelectorAll(".item");
const containersArray = [...containers];
let lastCheck = -1;
let pressShift = false

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", (e) => {
        if(pressShift == true) {
            let newPosition = checkboxesArray.indexOf(e.target);
            let start = Math.min(lastCheck, newPosition)
            let end = Math.max(lastCheck, newPosition)
            console.log(lastCheck)
            console.log(newPosition)
            
            for (let i = start; i <= end; i++) {
                checkboxesArray[i].checked = e.target.checked;
                checkboxesArray[i].closest(".item").classList.toggle("selected", e.target.checked)
            }
        } else {
            lastCheck = checkboxesArray.indexOf(e.target);
            e.target.closest(".item").classList.toggle("selected", e.target.checked)
        }})
});


document.addEventListener("keydown", e => {
    if(e.code == "ShiftLeft" || e.code == "ShiftRight"){
        pressShift = true;
    } ;
})

document.addEventListener("keyup", e => {
    if(e.code == "ShiftLeft" || e.code == "ShiftRight"){
        pressShift = false;
    } ;
})
