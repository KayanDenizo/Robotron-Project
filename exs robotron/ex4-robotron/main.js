const lista = document.querySelector("ul");
const botao = document.querySelector("#botao");

botao.addEventListener("click", () => {
  lista.setAttribute("data-lista", "mostrar");
});

document.querySelector("#close").addEventListener("click", () => {
  lista.setAttribute("data-lista", "fechar");
});

//A declaração do "mostrar" e "fechar" está no proprio CSS, e a "data-lista" está declarada na ul pai