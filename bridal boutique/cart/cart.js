// Retrieve cart data from local storage or initialize an empty cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add item to cart
function addToCart(item) {
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Display cart items in HTML
function showCart() {
  let cartDiv = document.getElementById("cart");
  let cartHTML = "";
  for (let i = 0; i < cart.length; i++) {
    cartHTML += "<p>" + cart[i].name + ": $" + cart[i].price + "</p>";
  }
  cartDiv.innerHTML = cartHTML;
}

// Clear cart data from local storage and HTML
function clearCart() {
  cart = [];
  localStorage.removeItem("cart");
  document.getElementById("cart").innerHTML = "";
}


let item = {
    name: "Widget",
    price: 10.00
  };
  
  addToCart(item);
  
