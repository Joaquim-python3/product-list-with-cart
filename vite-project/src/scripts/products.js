const productsLabel = document.getElementById("products_label");

export function setProduct(data) {
  let html = "";

  data.forEach((product) => {
    html += `
      <div class="main__card">
        <div class="main__top">
            <img class="main__image" src="${product.image.desktop}" alt="${product.name}"/>
            <div class="main__cart">
              <button class="main__button" id="add_cart" name="${product.name}">Add to cart</button>
            </div>
            <div class="main__quantity hidden" id="quantity_cart">
              <button class="main__button--plus" id="cart__plus" name="${product.name} plus">+</button>
              <button class="main__button--minus" id="cart__minus" name="${product.name} minus">-</button>
            </div>
        </div>
        <div class="main__bottom">
            <p class="main__category">${product.category}</p>
            <h3 class="main__name">${product.name}</h3>
            <p class="main__price">$${product.price.toFixed(2)}</p>
        </div>
      </div>
    `;
  });

  productsLabel.innerHTML = html;
}
