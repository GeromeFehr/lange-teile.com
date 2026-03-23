document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
  }

  const legalTabs = document.querySelectorAll(".legal-tab");
  const legalPanels = document.querySelectorAll(".legal-panel");

  if (legalTabs.length && legalPanels.length) {
    legalTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.getAttribute("data-legal-target");

        legalTabs.forEach((btn) => btn.classList.remove("active"));
        legalPanels.forEach((panel) => panel.classList.remove("active"));

        tab.classList.add("active");

        const activePanel = document.getElementById(target);
        if (activePanel) {
          activePanel.classList.add("active");
        }
      });
    });
  }

  const contactForm = document.querySelector("[data-demo-contact-form]");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Demo-Formular gesendet. Für echten Betrieb brauchst du Backend oder einen Form-Dienst.");
      contactForm.reset();
    });
  }

  const productCatalog = {
    "club-klassiker": { name: "Club-Klassiker 2,5 m", price: 59.9 },
    "backstage-deluxe": { name: "Backstage Deluxe 3,2 m", price: 89.9 },
    "wohnungsretter-mini": { name: "Wohnungsretter Mini 1,8 m", price: 39.9 },
    "vip-lounge-reach": { name: "VIP-Lounge Reach 4,1 m", price: 129.9 },
    "festival-flex": { name: "Festival Flex 3,8 m", price: 99.9 },
    "afterparty-emergency": { name: "Afterparty Emergency 2,2 m", price: 49.9 }
  };

  const formatPrice = (value) =>
    new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(value);

  const getCart = () => {
    try {
      return JSON.parse(localStorage.getItem("langeTeileCart")) || [];
    } catch {
      return [];
    }
  };

  const saveCart = (cart) => {
    localStorage.setItem("langeTeileCart", JSON.stringify(cart));
    updateCartCount();
  };

  const updateCartCount = () => {
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    document.querySelectorAll("[data-cart-count]").forEach((el) => {
      el.textContent = count;
    });
  };

  const addToCart = (productKey) => {
    const product = productCatalog[productKey];
    if (!product) return;

    const cart = getCart();
    const existing = cart.find((item) => item.key === productKey);

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({
        key: productKey,
        name: product.name,
        price: product.price,
        qty: 1
      });
    }

    saveCart(cart);
    alert(`${product.name} wurde zum Warenkorb hinzugefügt.`);
  };

  document.querySelectorAll("[data-add-product]").forEach((button) => {
    button.addEventListener("click", () => {
      const productKey = button.getAttribute("data-add-product");
      addToCart(productKey);
    });
  });

  const cartItemsContainer = document.getElementById("cartItems");
  const subtotalEl = document.getElementById("subtotal");
  const shippingEl = document.getElementById("shipping");
  const totalEl = document.getElementById("total");
  const clearCartBtn = document.getElementById("clearCartBtn");
  const checkoutForm = document.getElementById("checkoutForm");

  const renderCartPage = () => {
    if (!cartItemsContainer) return;

    const cart = getCart();

    if (!cart.length) {
      cartItemsContainer.innerHTML = `
        <div class="empty-cart">
          <h3>Dein Warenkorb ist leer</h3>
          <p>Aktuell ist hier noch nichts drin. Noch gar nichts zum Hochtragen also.</p>
          <a href="shop.html" class="btn btn-primary">Zum Shop</a>
        </div>
      `;
      if (subtotalEl) subtotalEl.textContent = formatPrice(0);
      if (shippingEl) shippingEl.textContent = formatPrice(0);
      if (totalEl) totalEl.textContent = formatPrice(0);
      return;
    }

    cartItemsContainer.innerHTML = cart
      .map(
        (item) => `
          <div class="cart-item">
            <div class="cart-item-info">
              <h3>${item.name}</h3>
              <p>${formatPrice(item.price)} pro Stück</p>
            </div>

            <div class="cart-item-controls">
              <button class="qty-btn" data-cart-action="decrease" data-cart-key="${item.key}">−</button>
              <span class="qty-value">${item.qty}</span>
              <button class="qty-btn" data-cart-action="increase" data-cart-key="${item.key}">+</button>
            </div>

            <div class="cart-item-price">
              <strong>${formatPrice(item.price * item.qty)}</strong>
              <button class="remove-btn" data-cart-action="remove" data-cart-key="${item.key}">Entfernen</button>
            </div>
          </div>
        `
      )
      .join("");

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const shipping = subtotal > 120 ? 0 : 6.9;
    const total = subtotal + shipping;

    if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
    if (shippingEl) shippingEl.textContent = formatPrice(shipping);
    if (totalEl) totalEl.textContent = formatPrice(total);

    cartItemsContainer.querySelectorAll("[data-cart-action]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const action = btn.getAttribute("data-cart-action");
        const key = btn.getAttribute("data-cart-key");
        const nextCart = getCart();
        const item = nextCart.find((entry) => entry.key === key);

        if (!item) return;

        if (action === "increase") item.qty += 1;
        if (action === "decrease") item.qty -= 1;
        if (action === "remove") item.qty = 0;

        const filteredCart = nextCart.filter((entry) => entry.qty > 0);
        saveCart(filteredCart);
        renderCartPage();
      });
    });
  };

  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
      localStorage.removeItem("langeTeileCart");
      updateCartCount();
      renderCartPage();
    });
  }

  if (checkoutForm) {
    checkoutForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const cart = getCart();
      if (!cart.length) {
        alert("Dein Warenkorb ist leer.");
        return;
      }

      alert("Bestellung erfasst. Für echten Betrieb fehlt noch die Zahlungs- und Backend-Anbindung.");
      localStorage.removeItem("langeTeileCart");
      checkoutForm.reset();
      updateCartCount();
      renderCartPage();
    });
  }

  updateCartCount();
  renderCartPage();
});
