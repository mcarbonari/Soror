function filho() {
	var add = document.getElementById('formservico');
	add.innerHTML += "<form class='servico' id='formservico'><h3>Serviço</h3><div class='sla'><label for='categoria'>Categoria</label><p><input type='text' id='categoria'></p><label for='especifico'>Específico</label><p><input type='text' id='especifico'></p><label for='descricao'>Descrição</label><p><textarea id='descricao'></textarea></p><label for='contato'>Contato</label><p><input type='number' id='contato'></p></div><div class='add'><button class='btn'><img class='btnadd' src='img/add.png'></button></div></form>"
}