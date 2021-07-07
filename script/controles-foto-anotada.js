
let campoFiltro = document.querySelectorAll('#filtro-da-foto')[0]
let imagemAnotada = document.querySelectorAll('.foto-anotada > img')[0]

let campoImagemFile = document.querySelectorAll('#imagem')[0]

campoFiltro.addEventListener('change', e => {
	imagemAnotada.style.filter = campoFiltro.value
});

campoImagemFile.addEventListener('change', e => {
	imagemAnotada.src = window.URL.createObjectURL(e.target.files[0])
});