let products = [
  {name:"Laptop", price:50000, img:"https://via.placeholder.com/200"},
  {name:"Mobile", price:15000, img:"https://via.placeholder.com/200"},
  {name:"Headphones", price:2000, img:"https://via.placeholder.com/200"},
  {name:"Watch", price:3000, img:"https://via.placeholder.com/200"},
  {name:"Shoes", price:2500, img:"https://via.placeholder.com/200"},
  {name:"T-shirt", price:800, img:"https://via.placeholder.com/200"},
  {name:"Bag", price:1200, img:"https://via.placeholder.com/200"},
  {name:"Camera", price:45000, img:"https://via.placeholder.com/200"},
  {name:"Tablet", price:20000, img:"https://via.placeholder.com/200"},
  {name:"Keyboard", price:1500, img:"https://via.placeholder.com/200"},
  {name:"Mouse", price:700, img:"https://via.placeholder.com/200"},
  {name:"Speaker", price:3000, img:"https://via.placeholder.com/200"}
];

let cart = [];

// LOAD PRODUCTS
function loadProducts(){
  const container = document.getElementById("productContainer");
  container.innerHTML = "";

  products.forEach((p,i)=>{
    container.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${i})">Add to Cart</button>
      </div>
    `;
  });
}

// ADD TO CART
function addToCart(i){
  cart.push(products[i]);
  document.getElementById("cartCount").innerText = cart.length;
  openCart();
  updateCart();
}

// UPDATE CART
function updateCart(){
  let box = document.getElementById("cartItems");
  let total = 0;

  box.innerHTML = "";

  cart.forEach(item=>{
    total += item.price;

    box.innerHTML += `
      <div>
        <p>${item.name}</p>
        <p>₹${item.price}</p>
      </div>
    `;
  });

  document.getElementById("total").innerText = "Total: ₹" + total;
}

// CART PANEL
function openCart(){
  document.getElementById("cartPanel").style.right = "0";
}

function closeCart(){
  document.getElementById("cartPanel").style.right = "-320px";
}

// MOBILE MENU
function toggleMenu(){
  document.getElementById("menu").classList.toggle("active");
}

// LOAD INIT
loadProducts();