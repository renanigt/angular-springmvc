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
	
	self.salvarCliente = function() {
		
		var clienteModel = self.iniciaClienteModel();
		ClienteService.salvarCliente(clienteModel).then(function(data) {
			if(data.status == "SUCESSO") {
				self.limpaFormulario();
				self.mensagem = "Cliente incluído com sucesso !!";
			} else {
				self.limpaMensagem();
				for(i=0; i < data.result.length; i++) {
					self.errosValidacao[i] = data.result[i].code;
				}
			}
		}, function(reason) {
			self.mensagem = "Houve um erro ao incluir o cliente !!";
		});
		
	};
	
	self.alterarCliente = function() {
		
		var clienteModel = self.iniciaClienteModel();
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
	
	self.submit = function(id) {
		if(id) {
			self.alterarCliente();
		} else {
			self.salvarCliente();
		}		
	};
	
	self.iniciaClienteModel = function() {
		var clienteModel = new Object();
		clienteModel.id = self.id;
		clienteModel.nome = self.nome;
		clienteModel.cidade = self.cidade;
		clienteModel.endereco = self.endereco;
		clienteModel.telefone = self.telefone;
		return clienteModel;
	}

	self.limpaFormulario = function() {
		self.id = null;
		self.nome = null;
		self.cidade = null;
		self.endereco = null;
		self.telefone = null;
		self.mensagem = null;
		self.errosValidacao = [];
	}
	
	self.limpaMensagem = function() {
		self.mensagem = null;
	}
	
}
