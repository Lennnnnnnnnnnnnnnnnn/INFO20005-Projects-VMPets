// OBJECTS ---------------------------------------------------------------------------------

/*-------------------------------------- Food Products--------------------------------------*/
const products = {
  dogs: [
    {
      name: "Pedigree Adult Dog Food",
      price: 99.99,
      originalPrice: 129.99,
      image: "images/product_img/dog_food_1.png",
      sale: true,
      variants: ["500g", "1kg", "2kg"],
      ingredients:
        "Chicken, whole grain corn, animal fat, natural flavours, vitamins & minerals.",
      description:
        "Complete nutrition for adult dogs. Rich in protein with essential vitamins for a healthy coat and strong bones.",
    },
    {
      name: "Knibbles'nBites Dog Food",
      price: 99.99,
      originalPrice: 129.99,
      image: "images/product_img/dog_food_2.png",
      sale: true,
      variants: ["1kg", "3kg"],
      ingredients:
        "Beef, rice flour, vegetable oil, natural flavours, taurine, vitamins & minerals.",
      description:
        "Premium beef formula for active adult dogs. Supports muscle development and sustained energy levels.",
    },
    {
      name: "Hypro Premium Dog Food",
      price: 99.99,
      image: "images/product_img/dog_food_3.png",
      sale: false,
      variants: ["500g", "2kg", "5kg"],
      ingredients:
        "Lamb, barley, sunflower oil, flaxseed, probiotics, vitamins & minerals.",
      description:
        "Gentle lamb and barley recipe ideal for dogs with sensitive stomachs. Promotes healthy digestion.",
    },
    {
      name: "4Legs Natural Chicken Dog Food",
      price: 99.99,
      image: "images/product_img/dog_food_4.png",
      sale: false,
      variants: ["1kg", "2kg"],
      ingredients:
        "Salmon, sweet potato, pea flour, omega-3 fatty acids, vitamins & minerals.",
      description:
        "Grain-free salmon formula rich in omega-3 fatty acids for a shiny coat and healthy skin.",
    },
  ],
  cats: [
    {
      name: "Whiskas Cat Food",
      price: 89.99,
      originalPrice: 109.99,
      image: "images/product_img/cat_food_1.png",
      sale: true,
      variants: ["400g", "1kg"],
      ingredients:
        "Chicken, fish meal, corn starch, taurine, vitamins & minerals.",
      description:
        "Complete and balanced nutrition for adult cats. High in protein to support lean muscle mass.",
    },
    {
      name: "FussyCat Tuna & Salmon Gravy",
      price: 79.99,
      image: "images/product_img/cat_food_2.png",
      sale: false,
      variants: ["300g", "800g"],
      ingredients: "Tuna, rice, sunflower oil, taurine, vitamins & minerals.",
      description:
        "Delicious tuna flavour cats love. Promotes urinary tract health and supports a healthy immune system.",
    },
    {
      name: "BIGDOG Fresh Cat Food",
      price: 79.99,
      image: "images/product_img/cat_food_3.png",
      sale: false,
      variants: ["300g", "800g", "2kg"],
      ingredients:
        "Salmon, herring, pea protein, omega-3 fatty acids, vitamins & minerals.",
      description:
        "Ocean fish blend that supports healthy vision and brain development in adult cats.",
    },
    {
      name: "BlackHawk Chicken Cat Food",
      price: 79.99,
      image: "images/product_img/cat_food_4.png",
      sale: false,
      variants: ["400g", "1.2kg"],
      ingredients: "Beef, liver, potato starch, taurine, vitamins & minerals.",
      description:
        "Rich beef and liver recipe for cats who prefer red meat flavours. Supports muscle tone and vitality.",
    },
  ],
};

// FUNCTIONS ---------------------------------------------------------------------------------

/*-------------------------------------- Home Featured --------------------------------------*/

function initHomeFeatured() {
  const grid = document.getElementById("featured-grid");
  if (!grid) return;

  const picks = [
    { category: "dogs", index: 0 },
    { category: "dogs", index: 2 },
    { category: "cats", index: 0 },
    { category: "cats", index: 2 },
  ];

  grid.innerHTML = picks
    .map(({ category, index }) => renderProductCard(products[category][index], category, index))
    .join("");

  grid.addEventListener("click", (e) => {
    const btn = e.target.closest(".card-add-btn");
    if (!btn) return;
    const href = btn.closest("article").querySelector(".card-view-btn").getAttribute("href");
    const params = new URLSearchParams(href.split("?")[1]);
    const cat = params.get("category");
    const idx = parseInt(params.get("index"));
    addToCart(cat, idx, products[cat][idx].variants[0], 1);
  });
}

/*-------------------------------------- Header & Footer--------------------------------------*/

// Injects the shared nav into every page's <header>.
function initHeader() {
  document.querySelector("header").innerHTML = `
        <nav>
            <a href="index.html">
                <p class="brand-logo">VM Pet Shop</p>
            </a>
            <div class="nav-links">
                <div class="nav-dropdown">
                    <a href="product_list.html?category=dogs">Dogs</a>
                    <div class="dropdown-menu">
                        <a href="product_list.html?category=dogs">Dry Food</a>
                        <a href="#">Wet Food</a>
                        <a href="#">Treats &amp; Snacks</a>
                    </div>
                </div>
                <div class="nav-dropdown">
                    <a href="product_list.html?category=cats">Cats</a>
                    <div class="dropdown-menu">
                        <a href="product_list.html?category=cats">Dry Food &amp; Wet Food</a>
                        <a href="#">Treats &amp; Snacks</a>
                        <a href="#">Litter &amp; Accessories</a>
                    </div>
                </div>
                <div class="nav-dropdown">
                    <a href="#">Birds</a>
                    <div class="dropdown-menu">
                        <a href="#">Seeds &amp; Pellets</a>
                        <a href="#">Treats</a>
                        <a href="#">Accessories</a>
                    </div>
                </div>
                <div class="nav-dropdown">
                    <a href="#">Small Animals</a>
                    <div class="dropdown-menu">
                        <a href="#">Food &amp; Pellets</a>
                        <a href="#">Bedding</a>
                        <a href="#">Toys &amp; Accessories</a>
                    </div>
                </div>
                <a href="on_sale.html">On Sale</a>
                <a href="#">Top Selling</a>
                <a href="#">New Arrivals</a>
            </div>
            <div class="nav-icons">
                <a href="menu.html" class="nav-menu-link">
                    <img id="menu-icon" src="images/icons/Menu.svg" alt="Menu button">
                </a>
                <a href="search.html">
                    <img id="search-icon" src="images/icons/Search.svg" alt="Search button">
                </a>
                <a href="shopping_cart.html" class="cart-icon-wrapper">
                    <img id="cart-icon" src="images/icons/Cart.svg" alt="Cart button">
                    <span id="cart-badge" class="hidden"></span>
                </a>
            </div>
        </nav>
    `;
}

// Injects the shared footer content into every page's <footer>.
function initFooter() {
  document.querySelector("footer").innerHTML = `
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
}

/*-------------------------------------- Menu--------------------------------------*/

// Fall back to previous page after closing menu
if (document.body.id === "menu-page") {
  const closeBtn = document.querySelector("#menu-page > img");
  closeBtn.addEventListener("click", () => history.back());

    document.querySelectorAll(".section-header").forEach((header) => {
    header.addEventListener("click", () => {
      header.closest(".sub-sections").classList.toggle("open");
    });
  });
}

/*-------------------------------------- Product List--------------------------------------*/

function initProductList() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  const category = new URLSearchParams(window.location.search).get("category") || "dogs";
  const list = products[category];

  document.getElementById("category-title").textContent =
    category.charAt(0).toUpperCase() + category.slice(1) + " Foods";
  document.getElementById("product-count").textContent =
    `${list.length} Products`;
  grid.innerHTML = list
    .map((p, i) => renderProductCard(p, category, i))
    .join("");

  grid.addEventListener("click", (e) => {
    const btn = e.target.closest(".card-add-btn");
    if (!btn) return;
    const href = btn.closest("article").querySelector(".card-view-btn").getAttribute("href");
    const params = new URLSearchParams(href.split("?")[1]);
    const cat = params.get("category");
    const idx = parseInt(params.get("index"));
    addToCart(cat, idx, products[cat][idx].variants[0], 1);
  });
}

/*-------------------------------------- Product Detail--------------------------------------*/

// Wires up the +/- quantity buttons.
// Prevents the value from going below 1 when decrementing.
function initQuantity() {
  // check if quantity input exists on this page
  const qtyInput = document.getElementById("qty");
  if (!qtyInput) return;

  document.getElementById("qty-minus").addEventListener("click", () => {
    // decrement but not below 1
    qtyInput.value = Math.max(1, parseInt(qtyInput.value) - 1);
  });
  document.getElementById("qty-plus").addEventListener("click", () => {
    // increment
    qtyInput.value = parseInt(qtyInput.value) + 1;
  });
}

// Wires up the variant size buttons. On click, marks the selected button as active,
// deactivates all others, and updates the size label to match.
function initVariants() {
  const variantBtns = document.querySelectorAll(".product-variants button");
  const sizeLabel = document.querySelector(".size strong");
  // run when there are multiple buttons
  if (!variantBtns.length) return;

  variantBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // remove active from all buttons then add active to clicked button
      variantBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      // update label
      if (sizeLabel) sizeLabel.textContent = btn.textContent;
    });
  });
}

// Opens an enlarged version of the product image in a fullscreen darkened overlay.
// Clicking the container (image or enlarge icon), the overlay, or pressing Escape closes it.
function initImageZoom() {
  // check if product image exists on this page
  const productImg = document.querySelector(".product-img img");
  const productImgContainer = document.querySelector(".product-img");
  if (!productImg) return;

  // create overlay and enlarged image elements dynamically
  const overlay = document.createElement("div");
  overlay.id = "img-overlay";
  const enlargedImg = document.createElement("img");
  enlargedImg.src = productImg.src;
  enlargedImg.alt = productImg.alt;
  overlay.appendChild(enlargedImg);
  document.body.appendChild(overlay);

  // open overlay when image container (or enlarge icon) is clicked
  productImgContainer.addEventListener("click", () => {
    overlay.classList.add("active");
  });

  // close overlay when background is clicked
  overlay.addEventListener("click", () => {
    overlay.classList.remove("active");
  });

  // close overlay on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") overlay.classList.remove("active");
  });
}


function initProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  const index = parseInt(params.get("index"), 10);
  const product = products[category]?.[index];
  if (!product) return;

  // Image
  const img = document.querySelector(".product-img img");
  img.src = product.image;
  img.alt = product.name;

  // Name, price, initial size label
  document.querySelector(".product-info h1").textContent = product.name;
  document.querySelector(".product-info .price").textContent =
    `$${product.price.toFixed(2)}`;
  const sizeLabel = document.querySelector(".size strong");
  if (sizeLabel)
    sizeLabel.textContent = product.variants[product.variants.length - 1];

  // Variant buttons
  const variantsDiv = document.querySelector(".product-variants");
  variantsDiv.innerHTML = product.variants
    .map((v, i) => {
      if (i === product.variants.length - 1) {
        return `<button class="active">${v}</button>`;
      } else {
        return `<button>${v}</button>`;
      }
    })
    .join("");

  // Adding accordion content
  const details = document.querySelectorAll(".product-description details");
  if (details[0])
    details[0].querySelector("p").textContent = product.ingredients;
  if (details[1])
    details[1].querySelector("p").textContent = product.description;

  // Related products (up to 2 others in same category)
  const relatedSection = document.querySelector(".related-products");
  const related = products[category]
    .map((p, i) => ({ product: p, index: i }))
    .filter(({ index: i }) => i !== index)
    .slice(0, 2);

  relatedSection.innerHTML =
    `<h2>Related Products</h2>` +
    related
      .map(
        ({ product: p, index: i }) => `
        <a href="product_detail.html?category=${category}&index=${i}" class="product-card-link">
            <article class="product-card product-card-row">
                <div class="product-card-img">
                    <img src="${p.image}" alt="${p.name}">
                </div>
                <div class="product-card-info">
                    <h3>${p.name}</h3>
                    <p class="price">$${p.price.toFixed(2)}</p>
                </div>
            </article>
        </a>`,
      )
      .join("");

  // Re-init interactive components now that DOM is populated
  initVariants();
  initImageZoom();

  // Wire add to cart button
  document.getElementById("add-to-cart").addEventListener("click", () => {
    const variant = document.querySelector(".product-variants button.active").textContent;
    const quantity = parseInt(document.getElementById("qty").value);
    addToCart(category, index, variant, quantity);
  });
}

/*-------------------------------------- Payment--------------------------------------*/

// Wires up the payment page: method tab switching and card/expiry input formatting.
function initPaymentPage() {
  // Populate order summary from cart
  const cart = getCart();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  document.querySelector(".summary-badge").textContent = `${cart.length} item${cart.length !== 1 ? "s" : ""}`;
  document.getElementById("summary-items").innerHTML = cart.map((item) => `
    <div class="summary-item">
      <img class="summary-item-img" src="${item.image}" alt="${item.name}">
      <div class="summary-item-info">
        <p class="summary-item-name">${item.name}</p>
        <p class="summary-item-detail">${item.variant} · x${item.quantity}</p>
      </div>
      <p class="price">$${(item.price * item.quantity).toFixed(2)}</p>
    </div>
  `).join("");
  document.getElementById("summary-subtotal").textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById("summary-total").textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById("place-order").textContent = `Place Order — $${subtotal.toFixed(2)}`;

  // Grab all payment method tab buttons and the two form sections
  const tabs = document.querySelectorAll(".method-tab");
  const cardFields = document.getElementById("card-fields");
  const paypalFields = document.getElementById("paypal-fields");

  const cardInputs = cardFields.querySelectorAll("input[required]");

  // Attach a click listener to every tab button
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove the active highlight from all tabs, then add it to the clicked one
      tabs.forEach((t) => t.classList.remove("method-tab-active"));
      tab.classList.add("method-tab-active");

      // Read the data-method attribute on the button ("card" or "paypal")
      // and show the matching form section while hiding the other
      if (tab.dataset.method === "card") {
        cardFields.classList.remove("payment-hidden");
        paypalFields.classList.add("payment-hidden");
        cardInputs.forEach((input) => input.setAttribute("required", ""));
      } else {
        cardFields.classList.add("payment-hidden");
        paypalFields.classList.remove("payment-hidden");
        cardInputs.forEach((input) => input.removeAttribute("required"));
      }
    });
  });

  // Format card number with spaces every 4 digits (e.g. "1234 5678 9012 3456")
  const cardInput = document.getElementById("card-number");
  if (cardInput) {
    cardInput.addEventListener("input", () => {
      // Strip all non-digit characters, then cap at 16 digits
      const digits = cardInput.value.replace(/\D/g, "").slice(0, 16);
      // Insert a space after every group of 4 digits, except the last group
      // (?=.) ensures we don't add a trailing space after the final digit
      cardInput.value = digits.replace(/(.{4})(?=.)/g, "$1 ");
    });
  }

  // Format expiry date as MM / YY (e.g. "12 / 26")
  const expiryInput = document.getElementById("expiry");
  if (expiryInput) {
    expiryInput.addEventListener("input", () => {
      // Find every character that is NOT a digit, and replace it with nothing (delete it)
      const digits = expiryInput.value.replace(/\D/g, "").slice(0, 4);
      // Once the user has typed the month (2 digits) and started the year,
      // insert " / " between them
      if (digits.length >= 3) {
        expiryInput.value = digits.slice(0, 2) + " / " + digits.slice(2);
      } else {
        expiryInput.value = digits;
      }
    });
  }

  // Show confirmation overlay on Place Order (only if form is valid)
  document.getElementById("checkout-form").addEventListener("submit", (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      e.target.reportValidity();
      return;
    }
    saveCart([]);
    updateCartBadge();
    document.getElementById("order-overlay").classList.remove("hidden");
  });
}

/*-------------------------------------- Shopping Cart Page --------------------------------------*/

function initCartPage() {
  const cart = getCart();
  const cartSection = document.querySelector(".cart-section");
  const itemsSelectedEl = document.querySelector(".items-selected");
  const subtotalEl = document.getElementById("cart-subtotal");
  const cartTitle = document.getElementById("cart-title");

  if (cart.length === 0) {
    cartSection.innerHTML = "<p class='empty-cart'>Your cart is empty.</p>";
    itemsSelectedEl.textContent = "0 Items Selected";
    subtotalEl.textContent = "$0.00";
    cartTitle.style.display = 'none';
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  itemsSelectedEl.textContent = `${cart.length} Items Selected`;
  subtotalEl.textContent = `$${subtotal.toFixed(2)}`;

  if (cartTitle) cartTitle.textContent = `Total: ${cart.length} item${cart.length !== 1 ? "s" : ""}`;

  cartSection.innerHTML =
    cart.map((item, i) => `
      <article class="cart-item">
        <input type="checkbox" name="select-item" checked>
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-body">
          <div class="cart-item-info">
            <h3>${item.name}</h3>
            <div class="cart-item-meta">
              <p>${item.variant}</p>
              <p>Quantity: x${item.quantity}</p>
            </div>
            <p class="price">$${(item.price * item.quantity).toFixed(2)}</p>
          </div>
          <div class="cart-item-actions">
            <button class="edit-item" data-category="${item.category}" data-index="${item.index}">Edit</button>
            <button class="remove-item" data-index="${i}">Remove</button>
          </div>
        </div>
      </article>
    `).join("");

  cartSection.querySelectorAll(".edit-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      window.location.href = `product_detail.html?category=${btn.dataset.category}&index=${btn.dataset.index}`;
    });
  });

  cartSection.querySelectorAll(".remove-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      const updated = getCart();
      updated.splice(parseInt(btn.dataset.index), 1);
      saveCart(updated);
      updateCartBadge();
      initCartPage();
    });
  });

  document.querySelector(".checkout-btn").addEventListener("click", () => {
    window.location.href = "payment.html";
  });

  // Recommended: 2 products not already in cart
  const cartIndices = cart.map((i) => `${i.category}-${i.index}`);
  const recommended = [];
  for (const [category, list] of Object.entries(products)) {
    for (let i = 0; i < list.length; i++) {
      if (!cartIndices.includes(`${category}-${i}`)) {
        recommended.push({ product: list[i], category, index: i });
      }
      if (recommended.length === 2) break;
    }
    if (recommended.length === 2) break;
  }

  const recommendedSection = document.getElementById("recommended-section");
  recommendedSection.innerHTML =
    `<h2>Recommended Products</h2>` +
    recommended.map(({ product, category, index }) => renderProductCard(product, category, index, true)).join("");

  recommendedSection.addEventListener("click", (e) => {
    const btn = e.target.closest(".card-add-btn");
    if (!btn) return;
    const href = btn.closest("article").querySelector(".card-view-btn").getAttribute("href");
    const params = new URLSearchParams(href.split("?")[1]);
    const cat = params.get("category");
    const idx = parseInt(params.get("index"));
    addToCart(cat, idx, products[cat][idx].variants[0], 1);
  });
}

function renderProductCard(product, category, index, row = false, buttons = true) {
  const saleBadge = product.sale ? `<span class="sale-badge">SALE</span>` : "";
  const originalPrice = product.originalPrice
    ? `<del class="original-price">$${product.originalPrice.toFixed(2)}</del>`
    : "";
  return `
        <article class="product-card${row ? " product-card-row" : ""}">
            <a href="product_detail.html?category=${category}&index=${index}" class="product-card-img-link">
                <div class="product-card-img">
                    <img src="${product.image}" alt="${product.name}">
                    ${saleBadge}
                </div>
            </a>
            <div class="product-card-right">
                <a href="product_detail.html?category=${category}&index=${index}" class="product-card-link">
                    <div class="product-card-info">
                        <h3>${product.name}</h3>
                        <p>
                            <span class="price">$${product.price.toFixed(2)}</span>
                            ${originalPrice}
                        </p>
                    </div>
                </a>
                ${buttons ? `
                <div class="card-btn-row">
                    <a href="product_detail.html?category=${category}&index=${index}" class="card-view-btn">View Product</a>
                    <button class="card-add-btn">Add to Cart</button>
                </div>` : ""}
            </div>
        </article>
    `;
}

/*-------------------------------------- On Sale --------------------------------------*/

function initOnSalePage() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  // Gather all sale products across every category, preserving category + index for linking
  const saleProducts = [];
  for (const [category, list] of Object.entries(products)) {
    list.forEach((product, index) => {
      if (product.sale) {
        saleProducts.push({ product, category, index });
      }
    });
  }

  // Sorts product via selected sort method from filter function
  function render(sortValue) {
    const sorted = [...saleProducts];
    if (sortValue === "price-asc") {
      sorted.sort((a, b) => a.product.price - b.product.price);
    } else if (sortValue === "price-desc") {
      sorted.sort((a, b) => b.product.price - a.product.price);
    }

    document.getElementById("product-count").textContent = `${sorted.length} Products`;
    grid.innerHTML = sorted
      .map(({ product, category, index }) => renderProductCard(product, category, index))
      .join("");

    grid.addEventListener("click", (e) => {
      const btn = e.target.closest(".card-add-btn");
      if (!btn) return;
      const href = btn.closest("article").querySelector(".card-view-btn").getAttribute("href");
      const params = new URLSearchParams(href.split("?")[1]);
      const cat = params.get("category");
      const idx = parseInt(params.get("index"));
      addToCart(cat, idx, products[cat][idx].variants[0], 1);
    });
  }

  render("default");

  document.getElementById("sort-select").addEventListener("change", (e) => render(e.target.value));
}
/*-------------------------------------- Cart Storage --------------------------------------*/

// Shows a 2-second notification under the nav confirming the item was added
function updateCartBadge() {
  const badge = document.getElementById("cart-badge");
  if (!badge) return;
  const count = getCart().reduce((sum, item) => sum + item.quantity, 0);
  if (count === 0) {
    badge.classList.add("hidden");
  } else {
    badge.classList.remove("hidden");
    badge.textContent = count > 99 ? "99+" : count;
  }
}

function showCartNotification() {
  let notification = document.getElementById("cart-notification");
  if (!notification) {
    notification = document.createElement("div");
    notification.id = "cart-notification";
    notification.textContent = "Item Added Successfully!";
    document.body.appendChild(notification);
  }

  notification.classList.add("show");
  setTimeout(() => notification.classList.remove("show"), 2000);
}

// utility functions that read/write cart from a localStorage
function getCart() {
  return JSON.parse(localStorage.getItem("cart") || "[]"); // converts string from localStorage to js
}
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart)); // save js cart arrays into localStorage strings
}

function addToCart(category, index, variant, quantity) {
  const product = products[category][index];
  const cart = getCart();

  // find existing entry with same product and variant
  const existing = cart.find(
    (item) => item.category === category && item.index === index && item.variant === variant
  );

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      category,
      index,
      name: product.name,
      price: product.price,
      image: product.image,
      variant,
      quantity,
    });
  }

  saveCart(cart);
  updateCartBadge();
  showCartNotification();
}

/*-------------------------------------- Initializations --------------------------------------*/


// ── Run only on the payment page ──
if (document.body.id === "payment-page") {
  initPaymentPage();
}

// ── Run only on the cart page ──
if (document.body.id === "cart-page") {
  initCartPage();
}

// ── Run on every page ──
initHeader();
updateCartBadge();
initFooter();

// ── Run only on the product detail page ──
if (document.body.id === "Product-detail") {
  initProductDetail();
  initQuantity();
}

if (document.body.id === "Product-list") {
  initProductList();
}

if (document.body.id === "on-sale-page") {
  initOnSalePage();
}

if (document.body.id === "Home") {
  initHomeFeatured();
}
