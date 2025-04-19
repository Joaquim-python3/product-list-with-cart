export function escutarAddToCart(callback) {
    const botoes = document.querySelectorAll("#add_cart");
  
    botoes.forEach((botao) => {
      botao.addEventListener("click", callback);
    });
  }
  