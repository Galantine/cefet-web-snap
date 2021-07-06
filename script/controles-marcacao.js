
let botaoCheckbox = document.querySelectorAll('#visibilidade-das-marcacoes')[0]
let marcacoes = document.querySelectorAll('.marcacao')
let selecionadoAtual = 0
let X = document.querySelectorAll('#x-da-marcacao')[0]
let Y = document.querySelectorAll('#y-da-marcacao')[0]
let largura  = document.querySelectorAll('#largura-da-marcacao')[0]
let altura  = document.querySelectorAll('#altura-da-marcacao')[0]
let titulo = document.querySelectorAll('#titulo-da-marcacao')[0]
let conteudo = document.querySelectorAll('#conteudo-da-marcacao')[0]
let cor = document.querySelectorAll('#cor-da-marcacao')[0]
let retangular = document.querySelectorAll('input[value="formato-retangular"]')[0]
let oval = document.querySelectorAll('input[value="formato-oval"]')[0]

function preencheControles() {
	let selecionada = document.querySelectorAll('.selecionada')[0];
	X.value = parseInt(selecionada.style.left)
	Y.value = parseInt(selecionada.style.top)
	largura.value = parseInt(selecionada.style.width)
	altura.value = parseInt(selecionada.style.height)
	titulo.value = selecionada.getAttribute('data-titulo')
	conteudo.value = selecionada.getAttribute('data-conteudo')
	cor.value = selecionada.getAttribute('data-cor')
	retangular.checked = !selecionada.classList.contains('formato-oval')
	oval.checked = selecionada.classList.contains('formato-oval')
}

preencheControles()

botaoCheckbox.addEventListener('input', e => {
	marcacoes[0].parentElement.classList.toggle('marcacoes-ocultas')
});

marcacoes.forEach(marcacao => {
	marcacao.addEventListener('click', e => {
		if (Array.prototype.indexOf.call(marcacoes,marcacao) != selecionadoAtual) {
			marcacao.classList.toggle('selecionada')
			marcacoes[selecionadoAtual].classList.toggle('selecionada')
			selecionadoAtual = 1 - selecionadoAtual
		}
		preencheControles()
	})
})