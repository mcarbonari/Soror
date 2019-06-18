var btnabrir = document.getElementById('btnabrir');

btnabrir.addEventListener('click', function(evento){
	let dropdowninfo = document.getElementById('dropdowninfo');

	if(dropdowninfo.style.display == 'none'){
		dropdowninfo.style.display = 'block';
		btnabrir.style.transform = 'rotate(50deg)';
	}
	else{
		dropdowninfo.style.display = 'none';
	};
})