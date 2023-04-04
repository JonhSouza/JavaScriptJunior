/* objetivo deste JS é simplesmente gerar a interação dos botões do site, trocando as imagens conforme os cliques */

/* passo 1: dar um jeito de pegar o elemento html dos botões.
   passo 2: dar um jeito de identificar os cliques nos botões.
   passo 3: desmarcar o botão selecionado anterior.
   passo 4: marcar o botão clicado quando selecionado.
   passo 5: esconder a imagem de fundo anterior.
   passo 6: fazer parecer a imagem do fundo correspondente ao botão selecionado.*/

/* passo 1 */
const botoesCarrossel = document.querySelectorAll('.botao');
const img = document.querySelectorAll('.imagem');
/* passo 2 */
/* FORMA SIMPLIFICADA*/
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        /* passo 3 */
        desativarBotaoSelecionado();
        /* passo 4 */
        selecionarBotaoCarrossel(botao);
        /* passo 5 */
        esconderImagemAtiva();
        /*passo 6 */
        mostrarImagemDeFundo(indice);
    })
})

function mostrarImagemDeFundo(indice) {
    img[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
