const addItems = document.querySelector(".add-option");
const itemsList = document.querySelector(".options");
const items = [];

const submitPlate = (e) => {
    addItems.preventDefault;
    console.log(`${e} Si se hizo jaja`)
}

addItems.addEventListener("submit", e => {
    e.target.preventDefault;
    submitPlate(e.target)
})