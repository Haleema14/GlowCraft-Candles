// LocalStorage se cart load karein
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountElement.innerText = totalItems;
    }
}

function addToCart(name, price, image) {
    let existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, image, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(name + " cart mein add ho gaya hai!");
}

function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const cartTotalFinalElement = document.getElementById('cart-total-final');
    
    if (!cartItemsContainer) return;

    cartItemsContainer.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p class='empty-cart-msg'>Your cart is currently empty.</p>";
        if (cartTotalElement) cartTotalElement.innerText = "0";
        if (cartTotalFinalElement) cartTotalFinalElement.innerText = "0";
        return;
    }

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        cartItemsContainer.innerHTML += `
            <div class="cart-item" style="display:flex; align-items:center; justify-content:space-between; margin-bottom:15px; border-bottom:1px solid #ddd; padding-bottom:10px;">
                <img src="${item.image}" width="60" height="60" style="object-fit:cover; border-radius:5px;" alt="${item.name}">
                <h4>${item.name}</h4>
                <p>Rs. ${item.price}</p>
                <div style="display:flex; align-items:center; gap:8px;">
                    <button onclick="changeQuantity(${index}, -1)" style="padding:2px 8px; cursor:pointer;">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQuantity(${index}, 1)" style="padding:2px 8px; cursor:pointer;">+</button>
                </div>
                <p>Subtotal: Rs. ${item.price * item.quantity}</p>
                <button onclick="removeItem(${index})" style="background:#ff4d4d; color:white; border:none; padding:5px 10px; cursor:pointer; border-radius:3px;">Remove</button>
            </div>
        `;
    });

    // Subtotal aur Final Total dono ko update kar diya hai
    if (cartTotalElement) cartTotalElement.innerText = total;
    if (cartTotalFinalElement) cartTotalFinalElement.innerText = total;
}

function changeQuantity(index, change) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateCartCount();
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateCartCount();
}

// Checkout button action
function proceedToCheckout() {
    if (cart.length === 0) {
        alert("Aap ki cart khali hai!");
    } else {
        window.location.href = "checkout.html";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
    renderCart();
});