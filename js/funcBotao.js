var servico = document.getElementById('servico');

servico.addEventListener('click', function(evento){
	let listaOculta = document.getElementById('listaOculta');

	if(listaOculta.style.display == 'none'){
		listaOculta.style.display = 'block';
	}
	else{
		listaOculta.style.display = 'none';
	};
})