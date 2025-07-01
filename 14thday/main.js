const addItems = document.querySelector(".add-option");
const itemsList = document.querySelector(".options-menu");
const changes = document.querySelectorAll("button")
let items = [];

function addItem(e) {
    e.preventDefault();
    let newItem = this.elements[0].value;
    localStorage.setItem(`${newItem}`, newItem);
    if (items.length == 0) {   
        items.push(localStorage.getItem(newItem));
        itemsList.innerHTML = 
        `<li>
            <p>⭕</p><p>${newItem}</p>
        </li>`;
    } else {
        items.push(localStorage.getItem(newItem));
        itemsList.innerHTML += 
        `<li>
            <p>⭕</p><p>${newItem}</p>
        </li>`;
    }
    this.elements[0].value = ""
}

addItems.addEventListener("submit", addItem)

document.addEventListener("DOMContentLoaded", function() {
    items = (Object.values(localStorage));
    if (items.length == 0) {
        return;
    } else {
        itemsList.innerHTML = items.map(item =>
        `<li>
            <p>⭕</p><p>${item}</p>
        </li>`
    ).join('');
    console.log(items);
    }
    
});

const symbolChange = (e) => {
    const element = Array.from(e.children);
    element[0].textContent == "⭕" ? element[0].textContent = "✅"  :  element[0].textContent = "⭕";
}

itemsList.addEventListener("click", e => symbolChange(e.target))



changes[0].addEventListener("click", function() {
    localStorage.clear();
    itemsList.innerHTML = `
        <li><p>-  Esperando orden...</p></li>
    `;
    items = []
});

changes[1].addEventListener("click", function() {
    const li = itemsList.children;
    const lis = itemsList.childNodes;
    lis.forEach(list => {
        list.children[0].textContent == "⭕" ? list.children[0].textContent = "✅"  :  list.children[0].textContent = "⭕"
    })
    console.log(li)
    console.log(lis)
})