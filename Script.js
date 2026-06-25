const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    // Criamos uma propriedade 'curtiu' diretamente grudada em cada botão individual
    botao.curtiu = false;

    botao.addEventListener("click", botaoClicado);

    function botaoClicado() {
        let texto = botao.querySelector("span");

        if (botao.curtiu === false) {
            texto.textContent++;
            botao.curtiu = true;
            botao.style.background = "#ffcccc"; // Opcional: muda a cor ao curtir
        } else {
            texto.textContent--;
            botao.curtiu = false;
            botao.style.background = "#ffffff"; // Opcional: volta à cor normal
        }
    }
});
