const plants = [
  { name: "Aloe Vera", price: 10 },
  { name: "Snake Plant", price: 15 }
];

let cart = [];

function renderPlants() {
  const container = document.getElementById("plants");
  container.innerHTML = "";

  plants.forEach((plant, index) => {
    const div = document.createElement("div");
    div.innerHTML = `${plant.name} - $${plant.price}
      <button onclick="addToCart(${index})">Add</button>`;
    container.appendChild(div);
  });
}

function addToCart(index) {
  cart.push(plants[index]);
  renderCart();
}

function renderCart() {
  const cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";

  let total = 0;

  cart.forEach((item, i) => {
    total += item.price;
    const div = document.createElement("div");
    div.innerHTML = `${item.name} - $${item.price}
      <button onclick="removeItem(${i})">Remove</button>`;
    cartDiv.appendChild(div);
  });

  cartDiv.innerHTML += `<h3>Total: $${total}</h3>`;
}

function removeItem(i) {
  cart.splice(i, 1);
  renderCart();
}

renderPlants();
