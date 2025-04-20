export function escutarAddToCart(callback) {
  const botoes = document.querySelectorAll("#add_cart");
  const cart = document.getElementById("aside_cart");

  botoes.forEach((botao) => {
    botao.addEventListener("click", callback);
    botao.addEventListener("click", (e) => {
      cart.innerHTML += botao.getAttribute("name") + "<br>";
    });
  });
}
