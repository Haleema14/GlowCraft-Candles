// Cart Array to store items
let cart = JSON.parse(localStorage.getItem('glowcraft_cart')) || [];

// Function to Add Product to Cart
function addToCart(title, price, imageSrc) {
    const product = {
        title: title,
        price: price,
        image: imageSrc,
        quantity: 1
    };

    // Check if item already exists
    let existingItem = cart.find(item => item.title === title);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push(product);
    }

    // Save to LocalStorage
    localStorage.setItem('glowcraft_cart', JSON.stringify(cart));
    
    // Update Badge
    updateCartBadge();

    alert(title + " added to your cart!");
}

// Function to Update Header Cart Counter
function updateCartBadge() {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountElement.innerText = totalItems;
    }
}

// Run when page loads
document.addEventListener('DOMContentLoaded', updateCartBadge);