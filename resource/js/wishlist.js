document.addEventListener('DOMContentLoaded', () => {
    const wishlistContainer = document.getElementById('wishlist-container');
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    console.log('Wishlist IDs:', wishlist); // Debugging: Periksa ID yang ada di wishlist

    fetch('resource/js/products.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(products => {
            console.log('Products:', products); // Debugging: Periksa data produk

            const wishlistProducts = products.filter(product => wishlist.includes(product.id));
            console.log('Wishlist Products:', wishlistProducts); // Debugging: Periksa produk yang ada di wishlist
            
            wishlistProducts.forEach(product => {
                const productElement = document.createElement('div');
                productElement.className = 'container-product';

                productElement.innerHTML = `
                    <div class="card-img">
                        <img src="${product.imgSrc}" alt="${product.name}">
                    </div>
                    <div class="description">
                        <h4>${product.name}</h4>
                        <p>${product.description}</p>
                    </div>
                    <div class="price-button">
                        <p>${product.price}</p>
                        <button>Order Now!</button>
                    </div>
                `;

                wishlistContainer.appendChild(productElement);
            });
        })
        .catch(error => {
            console.error('Error loading products:', error);
        });
});
