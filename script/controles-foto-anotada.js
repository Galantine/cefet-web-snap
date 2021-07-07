
let campoFiltro = document.querySelectorAll('#filtro-da-foto')[0]
let imagem = document.querySelectorAll('.foto-anotada > img')[0]

campoFiltro.addEventListener('change', e => {
	imagem.style.filter = campoFiltro.value
});