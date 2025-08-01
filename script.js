const products = [
  {
    id: 1,
    name: "T-shirt",
    price: 499,
    image: "https://i5.walmartimages.com/asr/4157cd44-1dda-44e4-8973-a49a482425c9_1.79a3c179916e263a8b975595bdf04952.jpeg"
  },
  {
    id: 2,
    name: "Shoes",
    price: 1299,
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png"
  },
  {
    id: 3,
    name: "Watch",
    price: 1999,
    image: "https://tse2.mm.bing.net/th/id/OIP.mAJ7J9QJXSx1a4VPJx3JGQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3https://i5.walmartimages.com/asr/ac1bee91-39d7-4f0a-81bb-74a399f647e4_1.6da259a83adc9e23e89676163812ac82.jpeg"
  }
];

const cart = [];

const productContainer = document.getElementById('products');
const cartItems = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price');
const cartCount = document.getElementById('cart-count');

function displayProducts() {
  products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productContainer.appendChild(div);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
  });
  totalPrice.textContent = total;
  cartCount.textContent = cart.length;
}

displayProducts();
