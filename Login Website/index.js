// script.js

const products = [
{
    id:1,
    name:"iPhone 15",
    price:"₹79,999",
    image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
},
{
    id:2,
    name:"Headphones",
    price:"₹2,999",
    image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
},
{
    id:3,
    name:"Running Shoes",
    price:"₹3,499",
    image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"
},
{
    id:4,
    name:"Smart Watch",
    price:"₹5,999",
    image:"https://images.unsplash.com/photo-1585386959984-a4155224a1ad"
}
];

const container = document.getElementById("productContainer");
const cartCount = document.getElementById("cartCount");

let cart = [];

/* ================= SHOW PRODUCTS ================= */
function showProducts(items){

    container.innerHTML = "";

    if(items.length === 0){
        container.innerHTML = `<h2>No Product Found</h2>`;
        return;
    }

    items.forEach(product => {

        const inCart = cart.find(item => item.id === product.id);

        container.innerHTML += `
        <div class="box">
            <h2>${product.name}</h2>

            <div class="box-img"
            style="background-image:url('${product.image}')">
            </div>

            <p class="price">${product.price}</p>

            <button onclick="addToCart(${product.id})">
                ${inCart ? "✔ Added" : "Add To Cart"}
            </button>
        </div>
        `;
    });
}

showProducts(products);

/* ================= ADD TO CART ================= */
function addToCart(id){

    const selected = products.find(product => product.id === id);

    const exists = cart.find(item => item.id === id);

    if(!exists){
        cart.push(selected);
    }

    cartCount.innerText = cart.length;

    showProducts(products);
}

/* ================= CLICK CART TO CHECK ================= */
document.querySelector(".nav-cart").addEventListener("click", () => {

    if(cart.length === 0){
        alert("Your cart is empty");
        return;
    }

    let message = "Your Cart:\n\n";

    cart.forEach((item,index)=>{
        message += `${index+1}. ${item.name} - ${item.price}\n`;
    });

    alert(message);
});

/* ================= SEARCH BAR ================= */
document.querySelector(".search-input")
.addEventListener("keyup", function(){

    const value = this.value.toLowerCase();

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(value)
    );

    showProducts(filtered);
});

/* ================= SEARCH ICON CLICK ================= */
document.querySelector(".search-icon")
.addEventListener("click", ()=>{

    const value = document.querySelector(".search-input").value.toLowerCase();

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(value)
    );

    showProducts(filtered);
});