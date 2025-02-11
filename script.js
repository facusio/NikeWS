document.addEventListener("DOMContentLoaded", () => {
  const cartIcon = document.getElementById("cart-icon");
  const cart = document.getElementById("cart");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const checkoutBtn = document.getElementById("checkout");
  const searchIcon = document.getElementById("search-icon");
  const searchOverlay = document.getElementById("search-overlay");
  const closeSearch = document.getElementById("close-search");
  const menuIcon = document.getElementById("menu-icon");
  const navMenu = document.querySelector(".nav-menu");
  const shopNowBtn = document.getElementById("shop-now");

  let cartContents = [];

  // Toggle cart
  cartIcon.addEventListener("click", () => {
    cart.classList.toggle("open");
  });

  // Add to cart functionality
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", (e) => {
      const product = e.target.closest(".product");
      const name = product.querySelector("h4").textContent;
      const price = parseFloat(
        product.querySelector(".price").textContent.replace("$", "")
      );

      cartContents.push({ name, price });
      updateCart();

      // Add animation to the cart icon
      cartIcon.classList.add("bounce");
      setTimeout(() => cartIcon.classList.remove("bounce"), 300);
    });
  });

  // Update cart display
  function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cartContents.forEach((item) => {
      const itemElement = document.createElement("div");
      itemElement.textContent = `${item.name} - $${item.price}`;
      cartItems.appendChild(itemElement);
      total += item.price;
    });

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
  }

  // Checkout functionality
  checkoutBtn.addEventListener("click", () => {
    alert("Thank you for your purchase!");
    cartContents = [];
    updateCart();
  });

  // Search functionality
  searchIcon.addEventListener("click", () => {
    searchOverlay.classList.add("open");
  });

  closeSearch.addEventListener("click", () => {
    searchOverlay.classList.remove("open");
  });

  // Mobile menu toggle
  menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Shop Now button functionality
  shopNowBtn.addEventListener("click", () => {
    document
      .querySelector(".featured-products")
      .scrollIntoView({ behavior: "smooth" });
  });

  // Add smooth scrolling for navigation links
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Change navbar appearance on scroll
  window.addEventListener("scroll", () => {
    const nav = document.querySelector(".nav");
    if (window.scrollY > 100) {
      nav.style.backgroundColor = "rgba(17, 17, 17, 0.9)";
    } else {
      nav.style.backgroundColor = "#111";
    }
  });

  // Add hover effect to product images
  document.querySelectorAll(".product img").forEach((img) => {
    img.addEventListener("mouseover", () => {
      img.style.transform = "scale(1.05)";
    });
    img.addEventListener("mouseout", () => {
      img.style.transform = "scale(1)";
    });
  });

  // Add a simple animation for the hero content
  window.addEventListener("load", () => {
    const heroContent = document.querySelector(".hero-content");
    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(20px)";

    setTimeout(() => {
      heroContent.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      heroContent.style.opacity = "1";
      heroContent.style.transform = "translateY(0)";
    }, 300);
  });
});
