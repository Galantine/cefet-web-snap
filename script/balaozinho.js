
let balaozinho = document.querySelectorAll('#balaozinho')[0]

let marcacoes2 = document.querySelectorAll('.marcacao')

marcacoes2.forEach(marcacao => {
	marcacao.addEventListener('mousemove', e => {
		balaozinho.style.left = `${e.pageX}px`
		balaozinho.style.top = `${e.pageY}px`
	});

	marcacao.addEventListener('mouseover', e => {
		let title = document.createElement('h2')
		title.innerHTML = marcacao.getAttribute('data-titulo')
		balaozinho.appendChild(title)
		let conteudo = document.createElement('p')
		conteudo.innerHTML = marcacao.getAttribute('data-conteudo')
		balaozinho.appendChild(conteudo)
		balaozinho.style.backgroundColor = marcacao.getAttribute('data-cor')
	});

	marcacao.addEventListener('mouseout', e => {
		balaozinho.innerHTML = ''
	});
})