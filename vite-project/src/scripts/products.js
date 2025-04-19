const productsLabel = document.getElementById("products-label");

export function setProduct(data) {
  let html = "";

  data.forEach((product) => {
    html += `
      <div class="main__card">
        <img class="main__image" src="${product.image.thumbnail}" alt="${product.name}"  />
        <div class="product-info">
            <p class="main__category">${product.category}</p>
            <h3 class="main__name">${product.name}</h3>
            <p class="main__price">$${product.price.toFixed(2)}</p>
        </div>
      </div>
    `;
  });

  productsLabel.innerHTML = html;
}
