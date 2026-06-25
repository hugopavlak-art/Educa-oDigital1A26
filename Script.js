 // Seleciona todos os botões de reação da página
const botoes = document.querySelectorAll('.botoes-reacao button');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        // Encontra o elemento <span> dentro do botão clicado
        const contador = botao.querySelector('span');
        
        // Pega o valor atual, transforma em número e soma mais 1
        let quantidadeAtual = parseInt(contador.textContent);
        contador.textContent = quantidadeAtual + 1;
        
        // Efeito visual opcional: dá um pequeno "pulo" no botão ao clicar
        botao.style.transform = 'scale(1.2)';
        setTimeout(() => {
            botao.style.transform = 'scale(1)';
        }, 100);
    });
});
