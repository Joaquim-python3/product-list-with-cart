import { getData } from "./scripts/api";
import { setProduct } from "./scripts/products";
import { escutarAddToCart } from "./scripts/cart";
import "../src/main.scss";

getData()
  .then((response) => response.json())
  .then((data) => {
    setProduct(data);
    escutarAddToCart(() => {
      const span = document.getElementById("quantity_products");
      const atual = parseInt(span.innerText) || 0;
      span.innerText = atual + 1;
    });
  });
