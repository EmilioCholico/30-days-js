const checkboxes = document.querySelectorAll("input")
const checkboxesArray = [...checkboxes];
const containers = document.querySelectorAll(".item");
const containersArray = [...containers];
const check = false;
console.log(checkboxes)

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
        const position = checkboxesArray.indexOf(checkbox);
        containersArray[position].classList.toggle("selected", checkbox.checked);
    })
})
