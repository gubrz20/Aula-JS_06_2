const panel = document.createElement('div');
panel.id = 'painel-controle';
panel.style.padding = '20px';
panel.style.border = '2px solid #333';
panel.style.borderRadius = '8px';
panel.style.maxWidth = '400px';
panel.style.fontFamily = 'Arial, sans-serif';

const title = document.createElement('h2');
title.textContent = 'Painel de Controle Interativo';

const button = document.createElement('button');
button.id = 'btn-acao';
button.textContent = 'Clique Aqui';
button.style.padding = '10px 15px';
button.style.cursor = 'pointer';

const input = document.createElement('input');
input.type = 'text';
input.id = 'campo-texto';
input.placeholder = 'Digite algo...';
input.style.display = 'block';
input.style.marginTop = '10px';
input.style.padding = '8px';
input.style.width = '100%';
input.style.boxSizing = 'border-box';

const outputClick = document.createElement('p');
const outputMouse = document.createElement('p');
const outputKey = document.createElement('p');

panel.appendChild(title);
panel.appendChild(button);
panel.appendChild(input);
panel.appendChild(outputClick);
panel.appendChild(outputMouse);
panel.appendChild(outputKey);
document.body.appendChild(panel);

let totalCliques = 0;

button.addEventListener('click', () => {
  totalCliques++;
  outputClick.textContent = `Cliques no botão: ${totalCliques}`;
});

panel.addEventListener('mousemove', (event) => {
  const rect = panel.getBoundingClientRect();
  const x = Math.round(event.clientX - rect.left);
  const y = Math.round(event.clientY - rect.top);
  outputMouse.textContent = `Posição do cursor no painel: X: ${x}, Y: ${y}`;
});

input.addEventListener('keydown', (event) => {
  outputKey.textContent = `Última tecla pressionada: ${event.key}`;
});