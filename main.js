const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuShoppingCart.addEventListener('click', toggleShoppingCartAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){   
    const isShoppingCartContainerOpen = !shoppingCartContainer.classList.contains('inactive');
    const isProductDetailContainerOpen = !productDetailContainer.classList.contains('inactive');

    if (isShoppingCartContainerOpen) {
        shoppingCartContainer.classList.add('inactive');
    } 
    if (isProductDetailContainerOpen) {
        productDetailContainer.classList.add('inactive');
    } 
    desktopMenu.classList.toggle('inactive');    
}

function toggleMobileMenu(){    
    const isShoppingCartContainerOpen = !shoppingCartContainer.classList.contains('inactive');
    const isProductDetailContainerOpen = !productDetailContainer.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');

    if (isShoppingCartContainerOpen) {
        shoppingCartContainer.classList.add('inactive');
    }
    if (isProductDetailContainerOpen) {
        productDetailContainer.classList.add('inactive');
    }
    if (isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCartAside(){    
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isProductDetailContainerOpen = !productDetailContainer.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');

    if (isMobileMenuOpen) {
        mobileMenu.classList.add('inactive');
    }
    if (isProductDetailContainerOpen) {
        productDetailContainer.classList.add('inactive');
    }
    if (isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    const isShoppingCartContainerOpen = !shoppingCartContainer.classList.contains('inactive');
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');

    if (isShoppingCartContainerOpen) {
        shoppingCartContainer.classList.add('inactive');
    } 
    if (isMobileMenuOpen) {
        mobileMenu.classList.add('inactive');
    }
    if (isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive');
    }
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name : 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name : 'Monitor',
    price: 550,
    image: 'https://images.pexels.com/photos/1999463/pexels-photo-1999463.jpeg?auto=compress&cs=tinysrgb&w=1600'
});

productList.push({
    name : 'Laptop',
    price: 1200,
    image: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1600'
});
productList.push({
    name : 'Headset',
    price: 40,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_650755-MLA40807371233_022020-V.webp'
});
productList.push({
    name : 'Iphone 12 pro max',
    price: 1300,
    image: 'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-12-pro-max-gold.png?v=5'
});
productList.push({
    name : 'Keyboard',
    price: 80,
    image: 'https://m.media-amazon.com/images/I/61efvyxdAZL._AC_SL1200_.jpg'
});
productList.push({
    name : 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name : 'Monitor',
    price: 550,
    image: 'https://images.pexels.com/photos/1999463/pexels-photo-1999463.jpeg?auto=compress&cs=tinysrgb&w=1600'
});
productList.push({
    name : 'Laptop',
    price: 1200,
    image: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1600'
});
productList.push({
    name : 'Headset',
    price: 40,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_650755-MLA40807371233_022020-V.webp'
});
productList.push({
    name : 'Iphone 12 pro max',
    price: 1300,
    image: 'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-12-pro-max-gold.png?v=5'
});
productList.push({
    name : 'Keyboard',
    price: 80,
    image: 'https://m.media-amazon.com/images/I/61efvyxdAZL._AC_SL1200_.jpg'
});

function renderProducts(arr){
    for (product of productList) {
        const cardsContainer = document.querySelector('.cards-container');
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click', openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
        productInfoFigure.appendChild(productImgCart);

        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);