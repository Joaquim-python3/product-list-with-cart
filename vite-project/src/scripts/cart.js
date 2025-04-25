export function escutarAddToCart(callback) {
  const buttons = document.querySelectorAll("#add_cart");
  const cart = document.getElementById("aside_cart");

  buttons.forEach((botao) => {
    botao.addEventListener("click", (e) => {
      // Adiciona o nome no aside
      cart.innerHTML += botao.getAttribute("name") + "<br>";

      // Esconde o botão
      botao.classList.add("hidden");

      // Mostra a div de quantidade (pegando o próximo irmão)
      const quantityDiv = botao.closest(".main__cart").nextElementSibling;
      quantityDiv.classList.remove("hidden");

      // Atualiza o contador global
      callback();
    });
  });
}

export function escutarPlusAndMinus() {
  const buttonsPlus = document.getElementById("cart__plus");
  const buttonsMinus = document.getElementById("cart__minus");
}
