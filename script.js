function initializeApp() {
    loadProducts();
}


function loadProducts() {
    const productsContainer = document.getElementById('products')
    const products = [
        { id: 1, product_name:dior lip oil, price: 52},
        { id: 2, product_name:the ordinary lash and brow growth serum, price: 15},
        { id: 3, product_name:elizabeth arden red door eau de toilette vaporisateur, price: 40},
        { id: 4, product_name:elizabeth arden green tea honey drops body cream, price: 33},
        { id: 5, product_name:julliet has a gun not a perfume eau de parfum, price: 70},
    ];
    
    
    products.forEach(product => {
        const productItem = createProductItem(product);
        productsContainer.appendChild(productItem);
    })
    
}


function createProductItem(product) {
    const productItem = document.createElement('div')
    productItem.className = "product-item"
    
    const productName = document.createElement('span')
    productName.textContent = product.product_name;
    
    const productPrice = document.createElement('span')
    productPrice.textContent = `$${product.price}`;
    
    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = "Add to Cart"
    addToCartButton.addEventListener('click', () => addToCart(product));
    
    productItem.append(productName);
    productItem.append(productPrice);
    productItem.append(addToCartButton);
    
    return productItem;
    
}

function addToCart(product) {
    const cartContainer = document.getElementById('cart')
    const cartItem = createCartItem(product);
    cartContainer.appendChild(cartItem);
}


function createCartItem(product) {
    const cartItem = document.createElement('div')
    cartItem.className = "cart-item"
    
    const cartItemName = document.createElement('span')
    cartItemName.textContent = product.dior lip oil;
    
    cartItemQuantity = document.createElement("span")
    cartItemQuantity.textContent = "Quaintity: ";
    
    
    const quantityInput = document.createElement('input')
    quantityInput.type = 'number';
    quantityInput.value = 5;
    quantityInput.min = 1;
    
    const increaseButton = document.createElement("button")
    increaseButton.textContent = "+"
    increaseButton.addEventListener('click', () => {
        quantityInput.value = parseInt(quantityInput.value) + 1
    })
    
    const decreaseButton = document.createElement("button")
    increaseButton.textContent = "-"
    decreaseButton.addEventListener('click', () => {
        if(parseInt(quantityInput.value) > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1
        }
    })
    
    cartItem.appendChild(cartItemName)
    cartItem.appendChild(cartItemQuantity)
    cartItemQuantity.appendChild(quantityInput)
    cartItemQuantity.appendChild(increaseButton)
    cartItemQuantity.appendChild(decreaseButton)
    
    
    return cartItem;
}

function submitOrder() {
    alert('Order Submitted Successfully!')
}
