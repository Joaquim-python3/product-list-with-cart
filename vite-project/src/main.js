import { getData } from "./scripts/api";
import { setProduct } from "./scripts/products";
import "../src/main.scss"

getData()
  .then((response) => response.json())
  .then((data) => {
    setProduct(data);
  });
