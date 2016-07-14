var cadastroControllerApp = angular.module("cadastroControllerApp", []);

cadastroControllerApp.controller("ClienteController", function($http) {
	
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
		
		$http.post("/angular-springmvc/clientes/salva", clienteModel).then(function(response) {
			if(response.data.status == "SUCESSO") {
				self.mensagem = "Cliente incluído com sucesso !!";
			} else {
				for(i=0; i < response.data.result.length; i++) {
					self.errosValidacao[i] = response.data.result[i].code;
				}
			}
		}, function(response) {
			self.mensagem = "Houve um erro ao incluir o cliente !!";
		});
		
	};
	
	self.alterarCliente = function() {
		
		var clienteModel = self.iniciaClienteModel();
		
		$http.put("/angular-springmvc/clientes/altera", clienteModel).then(function(response) {
			if(response.data.status == "SUCESSO") {
				self.mensagem = "Cliente alterado com sucesso !!";
			} else {
				for(i=0; i < response.data.result.length; i++) {
					self.errosValidacao[i] = response.data.result[i].code;
				}
			}
		}, function(response) {
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
	
});
