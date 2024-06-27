document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            title: "Товар 1",
            description: "Описание товара 1",
            image: "https://dummyimage.com/150x150/0000ff/ffffff&text=Product+1"
        },
        {
            title: "Товар 2",
            description: "Описание товара 2",
            image: "https://dummyimage.com/150x150/ff0000/ffffff&text=Product+2"
        },
        {
            title: "Товар 3",
            description: "Описание товара 3",
            image: "https://dummyimage.com/150x150/00ff00/ffffff&text=Product+3"
        },
        {
            title: "Товар 4",
            description: "Описание товара 4",
            image: "https://dummyimage.com/150x150/ff00ff/ffffff&text=Product+4"
        },
        {
            title: "Товар 5",
            description: "Описание товара 5",
            image: "https://dummyimage.com/150x150/00ffff/ffffff&text=Product+5"
        },
        {
            title: "Товар 6",
            description: "Описание товара 6",
            image: "https://dummyimage.com/150x150/ffff00/ffffff&text=Product+6"
        },
        {
            title: "Товар 7",
            description: "Описание товара 7",
            image: "https://dummyimage.com/150x150/000000/ffffff&text=Product+7"
        },
        {
            title: "Товар 8",
            description: "Описание товара 8",
            image: "https://dummyimage.com/150x150/ffa500/ffffff&text=Product+8"
        }
    ];

    const productGrid = document.querySelector('.product-grid');
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalImage = document.getElementById('modal-image');
    const countElement = document.getElementById('count');
    const cartCountElement = document.getElementById('cart-count');
    const cartCounter = document.getElementById('cart-counter');
    let count = 1;

    function updateCartCount() {
        const cartCount = localStorage.getItem('cartCount') || 0;
        cartCountElement.textContent = cartCount;
        if (cartCount > 0) {
            cartCounter.style.display = 'block';
        } else {
            cartCounter.style.display = 'none';
        }
    }

    function openModal(product) {
        modalTitle.textContent = product.title;
        modalDescription.textContent = product.description;
        modalImage.src = product.image;
        count = 1;
        countElement.textContent = count;
        modal.style.display = 'flex';
    }

    function closeModalWindow() {
        modal.style.display = 'none';
    }

    function incrementCount() {
        count++;
        countElement.textContent = count;
    }

    function decrementCount() {
        if (count > 1) {
            count--;
            countElement.textContent = count;
        }
    }

    function addToCart() {
        let cartCount = parseInt(localStorage.getItem('cartCount') || 0);
        cartCount += count;
        localStorage.setItem('cartCount', cartCount);
        updateCartCount();
        closeModalWindow();
    }

    closeModal.addEventListener('click', closeModalWindow);
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            closeModalWindow();
        }
    });

    document.getElementById('increment').addEventListener('click', incrementCount);
    document.getElementById('decrement').addEventListener('click', decrementCount);
    document.getElementById('add-to-cart').addEventListener('click', addToCart);

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productTitle = document.createElement('h3');
        productTitle.textContent = product.title;

        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;

        const productImage = document.createElement('img');
        productImage.src = product.image;

        const productButton = document.createElement('button');
        productButton.textContent = 'Подробнее';
        productButton.addEventListener('click', () => openModal(product));

        productCard.appendChild(productTitle);
        productCard.appendChild(productDescription);
        productCard.appendChild(productImage);
        productCard.appendChild(productButton);

        productGrid.appendChild(productCard);
    });

    updateCartCount();
});