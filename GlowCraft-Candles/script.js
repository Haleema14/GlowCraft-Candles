// LocalStorage Cart Logic
function getCart() {
    return JSON.parse(localStorage.getItem('glowcart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('glowcart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const countElement = document.getElementById('cart-count');
    if (countElement) countElement.innerText = count;
}

function addToCart(name, price, image) {
    let cart = getCart();

    let item = cart.find(p => p.name === name);
    if (item) {
        item.quantity += 1;
        item.image = image; // Path update karein
    } else {
        cart.push({ name, price, image, quantity: 1 });
    }
    saveCart(cart);
    alert(`${name} added to cart!`);
}

function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    if (!cartItemsContainer) return;

    let cart = getCart();
    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-msg">Your cart is empty.</p>';
        if (cartTotalElement) cartTotalElement.innerText = '0';
        return;
    }

    // SVG Placeholder fallback
    const fallbackImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' fill='%23eee'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23aaa' font-size='10'%3ENo Image%3C/text%3E%3C/svg%3E";

    cart.forEach((item, index) => {
        total += item.price * item.quantity;

        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" width="60" onerror="this.onerror=null; this.src='${fallbackImage}';">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>Rs. ${item.price} x ${item.quantity}</p>
                </div>
                <button onclick="removeFromCart(${index})" class="remove-btn">Remove</button>
            </div>
        `;
    });

    if (cartTotalElement) cartTotalElement.innerText = total;
}

function removeFromCart(index) {
    let cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    displayCart();
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    displayCart();
});