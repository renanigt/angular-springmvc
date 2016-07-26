angular.module("app").controller("ClienteController", ClienteController);

ClienteController.$inject = ["ClienteService"];

function ClienteController(ClienteService) {
	
	var self = this;
	self.id = null;
	self.nome = null;
	self.cidade = null;
	self.endereco = null;
	self.telefone = null;
	self.mensagem = null;
	self.errosValidacao = [];
	self.salvarCliente = salvarCliente;
	self.alterarCliente = alterarCliente;
	self.submit = submit;
	
	function salvarCliente() {
		
		var clienteModel = iniciaClienteModel();
		
		ClienteService.salvarCliente(clienteModel).then(function(data) {
			if(data.status == "SUCESSO") {
				limpaFormulario();
				self.mensagem = "Cliente incluído com sucesso !!";
			} else {
				limpaMensagem();
				for(i=0; i < data.result.length; i++) {
					self.errosValidacao[i] = data.result[i].code;
				}
			}
		}, function(reason) {
			self.mensagem = "Houve um erro ao incluir o cliente !!";
		});
		
	};
	
	function alterarCliente() {
		
		var clienteModel = iniciaClienteModel();
		
		ClienteService.alterarCliente(clienteModel).then(function(data) {
			if(data.status == "SUCESSO") {
				self.mensagem = "Cliente alterado com sucesso !!";
			} else {
				for(i=0; i < data.result.length; i++) {
					self.errosValidacao[i] = data.result[i].code;
				}
			}
		}, function(reason) {
			self.mensagem = "Houve um erro ao alterar o cliente !!";
		});
		
	};
	
	function submit(id) {
		if(id) {
			alterarCliente();
		} else {
			salvarCliente();
		}		
	};
	
	function iniciaClienteModel() {
		var clienteModel = new Object();
		clienteModel.id = self.id;
		clienteModel.nome = self.nome;
		clienteModel.cidade = self.cidade;
		clienteModel.endereco = self.endereco;
		clienteModel.telefone = self.telefone;
		return clienteModel;
	}

	function limpaFormulario() {
		self.id = null;
		self.nome = null;
		self.cidade = null;
		self.endereco = null;
		self.telefone = null;
		self.mensagem = null;
		self.errosValidacao = [];
	}
	
	function limpaMensagem() {
		self.mensagem = null;
	}
	
}
