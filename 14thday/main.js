const addItems = document.querySelector(".add-option");
const itemsList = document.querySelector(".options-menu");
let items = [];

const submitPlate = (e) => {
    addItems.preventDefault;
    console.log(`${e} Si se hizo jaja`)
}

const chargePlates = e => {
    items.push(e);
}

addItems.addEventListener("submit", function(e) {
    e.preventDefault();
    const newItem = this.elements[0].value;
    localStorage.setItem(`${newItem}`, newItem);
    items.push(localStorage.getItem(newItem));
})

document.addEventListener("DOMContentLoaded", function() {
    items = (Object.values(localStorage))
    itemsList.innerHTML = items.map(item =>
        `<li>
            <p>${item}</p>
        </li>`
    ).join('');
    console.log(items)
    // if (items.length >= localStorage.length){
    //     return
    // } else {
    //     for(const comida in localStorage) {
    //     console.log(`Comida ${comida} o ${localStorage[comida]}`)
    // }
    // }
    
    // console.log(menuRefresh)
    
})