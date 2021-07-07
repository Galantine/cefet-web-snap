
let botaoCheckbox = document.querySelectorAll('#visibilidade-das-marcacoes')[0]
let marcacoes = document.querySelectorAll('.marcacao')
let selecionadoAtual = 0

let campoX = document.querySelectorAll('#x-da-marcacao')[0]
let campoY = document.querySelectorAll('#y-da-marcacao')[0]
let campoLargura  = document.querySelectorAll('#largura-da-marcacao')[0]
let campoAltura  = document.querySelectorAll('#altura-da-marcacao')[0]
let campoTitulo = document.querySelectorAll('#titulo-da-marcacao')[0]
let campoConteudo = document.querySelectorAll('#conteudo-da-marcacao')[0]
let campoCor = document.querySelectorAll('#cor-da-marcacao')[0]
let botaoRetangular = document.querySelectorAll('input[value="formato-retangular"]')[0]
let botaoOval = document.querySelectorAll('input[value="formato-oval"]')[0]

let radioSelecionadoAtual = 0
let radioButtons = document.querySelectorAll('input[type=radio]')

function preencheControles() {
	let selecionada = document.querySelectorAll('.selecionada')[0];
	campoX.value = parseInt(selecionada.style.left)
	campoY.value = parseInt(selecionada.style.top)
	campoLargura.value = parseInt(selecionada.style.width)
	campoAltura.value = parseInt(selecionada.style.height)
	campoTitulo.value = selecionada.getAttribute('data-titulo')
	campoConteudo.value = selecionada.getAttribute('data-conteudo')
	campoCor.value = selecionada.getAttribute('data-cor')
	botaoRetangular.checked = !selecionada.classList.contains('formato-oval')
	botaoOval.checked = selecionada.classList.contains('formato-oval')
}

function alteraEstiloSelecionada(style, value, unit) {
	let selecionada = document.querySelectorAll('.selecionada')[0];
	selecionada.style[style] = `${value}${unit}`
}

function alteraAtributoSelecionada(atributo, value) {
	let selecionada = document.querySelectorAll('.selecionada')[0];
	selecionada.setAttribute(atributo, value)
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

campoX.addEventListener('focusout', e => {
	alteraEstiloSelecionada('left', campoX.value, 'px')
})

campoY.addEventListener('focusout', e => {
	alteraEstiloSelecionada('top', campoY.value, 'px')
})

campoLargura.addEventListener('focusout', e => {
	alteraEstiloSelecionada('width', campoLargura.value, 'px')
})

campoAltura.addEventListener('focusout', e => {
	alteraEstiloSelecionada('height', campoAltura.value, 'px')
})

campoTitulo.addEventListener('focusout', e => {
	alteraAtributoSelecionada('data-titulo', campoTitulo.value)
})

campoConteudo.addEventListener('focusout', e => {
	alteraAtributoSelecionada('data-conteudo', campoConteudo.value)
})

campoCor.addEventListener('focusout', e => {
	alteraAtributoSelecionada('data-cor', campoCor.value)
})

radioButtons.forEach(botao => {
	let selecionada = document.querySelectorAll('.selecionada')[0];
	botao.addEventListener('click', e => {
		selecionada.classList.remove('formato-oval')
		selecionada.classList.remove('formato-retangular')
		let numBotao = Array.prototype.indexOf.call(radioButtons,botao)
		selecionada.classList.add(radioButtons[numBotao].value)
	})
})