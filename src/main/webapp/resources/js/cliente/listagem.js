angular.module("app").controller("ListagemController", ClienteController);

ClienteController.$inject = ["ClienteService"];

function ClienteController(ClienteService) {
	
	var self = this;
	self.listaClientes = [];
	self.listarTodos = listarTodos;
	self.deletarCliente = deletarCliente;
	
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
	
	function deletarCliente(id) {
		
		ClienteService.deletarCliente(id).then(function(data) {
			if(data.status == "SUCESSO") {
				self.mensagem = "Cliente removido com sucesso !!";
			}
			listarTodos();
		}, function(reason) {
			self.mensagem = "Houve um erro ao remover o cliente !!";
		});
		
	};
	
}
