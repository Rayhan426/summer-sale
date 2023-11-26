
function handleClickedBtn(target) {

 const selectedItemContainer = document.getElementById('product-items-list');   
const itemName = target.parentNode.childNodes[3].innerText
const li = document.createElement('li');
li.innerText = itemName;
selectedItemContainer.appendChild(li);
}