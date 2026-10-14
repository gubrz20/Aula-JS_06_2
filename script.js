const panel = document.getElementById('painel-controle');
const caixaEstado = document.getElementById('caixa-estado');
const outputMouse = document.getElementById('output-mouse');
const textoOriginal = 'Passe o mouse ou clique aqui';

caixaEstado.addEventListener('click', () => {
    caixaEstado.classList.toggle('ativo');
});

caixaEstado.addEventListener('mouseenter', () => {
    caixaEstado.textContent = 'Mouse está aqui!';
});

caixaEstado.addEventListener('mouseleave', () => {
    caixaEstado.textContent = textoOriginal;
});

panel.addEventListener('mousemove', (event) => {
    const rect = panel.getBoundingClientRect();
    const x = Math.round(event.clientX - rect.left);
    const y = Math.round(event.clientY - rect.top);
    outputMouse.textContent = `Posição do cursor no painel: X: ${x}, Y: ${y}`;
});

const inputTeclado = document.getElementById('input-teclado');
const teclaPressionada = document.getElementById('tecla-pressionada');
const listaSubmissoes = document.getElementById('lista-submissoes');

inputTeclado.addEventListener('keydown', (event) => {
    teclaPressionada.textContent = `Você pressionou: ${event.key}`;

    if (event.key === 'Enter' && inputTeclado.value.trim() !== '') {
        const item = document.createElement('li');
        item.textContent = `Submissão: ${inputTeclado.value}`;
        listaSubmissoes.appendChild(item);
        alert(`Texto submetido com sucesso: "${inputTeclado.value}"`);
        inputTeclado.value = '';
    }
});

const valorContador = document.getElementById('valor-contador');
const totalCliquesElement = document.getElementById('total-cliques');
const btnIncrementar = document.getElementById('btn-incrementar');
const btnDecrementar = document.getElementById('btn-decrementar');
const btnAcao = document.getElementById('btn-acao');

let contador = 0;
let totalCliques = 0;

function atualizarContador(novoValor) {
    contador = novoValor;
    valorContador.textContent = contador;
}

btnIncrementar.addEventListener('click', () => {
    atualizarContador(contador + 1);
});

btnDecrementar.addEventListener('click', () => {
    atualizarContador(contador - 1);
});

btnAcao.addEventListener('click', () => {
    totalCliques++;
    totalCliquesElement.textContent = totalCliques;
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        atualizarContador(contador + 1);
    } else if (event.key === 'ArrowDown') {
        atualizarContador(contador - 1);
    }
});