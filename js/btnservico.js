var btnabrir = document.getElementById('btnabrir');

btnabrir.addEventListener('click', function(evento){
	let dropdowninfo = document.getElementById('dropdowninfo');

	if(dropdowninfo.style.display == 'none'){
		dropdowninfo.style.display = 'block';
	}
	else{
		dropdowninfo.style.display = 'none';
	};
})