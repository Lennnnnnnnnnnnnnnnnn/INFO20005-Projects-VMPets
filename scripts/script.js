// initialises header and footer for all pages, so that they can be easily updated in one place
// avoiding repeated code in each html file

document.querySelector('header').innerHTML = `
    <nav>
        <p class="brand-logo">VM Pet Shop</p>
        <div class="nav-icons">
            <a href="menu.html">
                <img id="menu-icon" src="images/icons/Menu.svg" alt="Menu button">
            </a>
            <a href="search.html">
                <img id="search-icon" src="images/icons/Search.svg" alt="Search button">
            </a>
            <a href="shopping_cart.html">
                <img id="cart-icon" src="images/icons/cart.svg" alt="Cart button">
            </a>
        </div>
    </nav>
`;
document.querySelector('footer').innerHTML = `
        <div class="footer-about">
            <h3>About</h3>
            <p>Locations: Shop 11-12 F Shed Laneway Queen Victoria Market Melbourne, VIC 3000</p>
            <p>Wechat Contact: weimachongwudian</p>
            <p>Phone Contact: 0432 715 529</p>
        </div>
        <div class="footer-services">
            <h3>Customer Services</h3>
            <p>My account</p>
            <p>About Us</p>
            <p>Terms and Conditions</p>
        </div>
        <div class="footer-brand">
            <h3>VM Pet Shop</h3>
            <p class="footer-copy">2020 Victoria Market Pet Shop</p>
        </div>
`;
