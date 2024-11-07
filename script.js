document.addEventListener('DOMContentLoaded', () => {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
            displayProducts(products);
        })
        .catch(error => console.log('Xato yuz berdi:', error));
});

function displayProducts(products) {
    const productContainer = document.getElementById('product-container');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <div class="product-info">
                <h3>${product.title}</h3>
                <p>${product.description.substring(0, 100)}...</p>
                <p class="price">$${product.price}</p>
            </div>
        `;
        
        productContainer.appendChild(productCard);
    });
}
