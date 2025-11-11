console.log("Script loaded!");

const products = [
  { name: "Glow Serum", price: "Rs. 2500", image: "https://via.placeholder.com/200x200?text=Glow+Serum" },
  { name: "Lip Tint", price: "Rs. 1800", image: "https://via.placeholder.com/200x200?text=Lip+Tint" },
  { name: "Face Wash", price: "Rs. 1200", image: "https://via.placeholder.com/200x200?text=Face+Wash" },
  { name: "Moisturizer", price: "Rs. 2200", image: "https://via.placeholder.com/200x200?text=Moisturizer" },
  { name: "Eye Cream", price: "Rs. 2000", image: "https://via.placeholder.com/200x200?text=Eye+Cream" },
  { name: "Sunscreen", price: "Rs. 1500", image: "https://via.placeholder.com/200x200?text=Sunscreen" }
];

const productList = document.getElementById("productList");
const searchBox = document.getElementById("searchBox");

function displayProducts(items) {
  productList.innerHTML = "";
  items.forEach(p => {
    productList.innerHTML += `
      <div class="product">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p class="price">${p.price}</p>
      </div>
    `;
  });
}

displayProducts(products);

searchBox.addEventListener("input", () => {
  const search = searchBox.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(search));
  displayProducts(filtered);
});
