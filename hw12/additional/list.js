// створити елемент <a href='list.html'>На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар


const products = [];
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.includes('product')) {
        const product = JSON.parse(localStorage.getItem(key));
        products.push({ key, ...product });
    }
}
console.log(products);
const productCarts = document.createElement('div');


const renderCards= ()=> {
    productCarts.innerHTML='';
    for (const product of products) {
        const productDiv = document.createElement('div');
        const clearButton = document.createElement('button');
        clearButton.innerText = 'Clear';

        productDiv.innerHTML = `name-${product.name},many-${product.many}, price - ${product.price} <img class="product_img" src="${product.image}">`
        productDiv.classList.add('product');

        clearButton.onclick = () => {
            localStorage.removeItem(product.key)
            const index = products.findIndex((p) => p.key === product.key);
            if (index !== -1) {
                products.splice(index, 1);
            }
            renderCards();
        }

        productDiv.appendChild(clearButton);
        productCarts.appendChild(productDiv);
    }
}
renderCards();



const clearAll = document.getElementsByClassName('clear-all')[0];
clearAll.innerText = 'clear all'
clearAll.addEventListener('click', function () {
    products.length = 0;
    localStorage.clear();
    renderCards();
})
document.body.append(productCarts, clearAll);
renderCards();