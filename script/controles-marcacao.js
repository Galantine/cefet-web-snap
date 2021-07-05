
let botaoCheckbox = document.querySelectorAll('#visibilidade-das-marcacoes')[0];

let marcacoes = document.querySelectorAll('.marcacao');

botaoCheckbox.addEventListener('input', e => {
	marcacoes[0].parentElement.classList.toggle('marcacoes-ocultas')
});