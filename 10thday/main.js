const checkboxes = document.querySelectorAll("input")
const checkboxesArray = [...checkboxes];
const containers = document.querySelectorAll(".item");
const containersArray = [...containers];
let lastCheck = -1;
let pressShift = false
let 

const chekerFunc = (e) => {
        if(lastCheck == -1) {
            lastCheck = checkboxesArray.indexOf(e);
            containersArray[lastCheck].classList.toggle("selected", e.checked);
            console.log(lastCheck)
        } else {

        }
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => chekerFunc(checkbox))
});


document.addEventListener("keydown", e => {
    if(e.code == "ShiftLeft" || e.code == "ShiftRight"){
        pressShift = true
    } ;
})

document.addEventListener("keyup", e => {
    if(e.code == "ShiftLeft" || e.code == "ShiftRight"){
        pressShift = false;
    } ;
})
