import { getData } from "./scripts/api";

getData()
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
