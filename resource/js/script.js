// slide item ke-1
const track = document.querySelector('.rynnxz-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.rynnxz-button-next');
const prevButton = document.querySelector('.rynnxz-button-prev');
const slideWidth = slides[0].getBoundingClientRect().width;

let currentIndex = 0;

function updateSlidePosition() {
    const offset = currentIndex * -33.33;
    track.style.transform = `translateX(${offset}%)`;
    }
    
nextButton.addEventListener('click', () => {
    currentIndex = Math.min(currentIndex + 1, slides.length - 3);
    updateSlidePosition();
    });
    
prevButton.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateSlidePosition();
    });

// slide item ke-2

const track1 = document.querySelector('.rynnxz-track-1');
const slides1 = Array.from(track1.children);
const nextButton1 = document.querySelector('.rynnxz-button-next-1');
const prevButton1 = document.querySelector('.rynnxz-button-prev-1');
const slideWidth1 = slides1[0].getBoundingClientRect().width;
    
let currentIndex1 = 0;
    
function updateSlidePosition1() {
    const offset1 = currentIndex1 * -33.33;
    track1.style.transform = `translateX(${offset1}%)`;
}
    
nextButton1.addEventListener('click', () => {
    currentIndex1 = Math.min(currentIndex1 + 1, slides1.length - 3);
    updateSlidePosition1();
});
    
prevButton1.addEventListener('click', () => {
    currentIndex1 = Math.max(currentIndex1 - 1, 0);
        updateSlidePosition1();
});


    // nambahin wishlist ke localstorage

document.addEventListener('DOMContentLoaded', () => {
    const wishlistButtons = document.querySelectorAll('.wishlist-button');

    wishlistButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = event.target.closest('.wishlist-button').getAttribute('data-product-id');
            addToWishlist(productId);
        });
    });

    function addToWishlist(productId) {
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        if (!wishlist.includes(productId)) {
            wishlist.push(productId);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            alert('Product added to wishlist!');
        } else {
            alert('Product is already in wishlist!');
        }
    }
});