angular.module("app").controller("ListagemController", ClienteController);

ClienteController.$inject = ["ClienteService"];

function ClienteController(ClienteService) {
	
	var self = this;
	self.listaClientes = [];
	self.listarTodos = listarTodos;
	
	listarTodos();
	
	function listarTodos() {
		
		ClienteService.listarTodos().then(function(data) {
			if(data.status == "SUCESSO") {
				self.listaClientes = data.result;
			}
		}, function(reason) {
			self.mensagem = "Houve um erro ao listar os clientes !!";
		});
		
	};
	
}
