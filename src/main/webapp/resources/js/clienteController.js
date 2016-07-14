var cadastroControllerApp = angular.module("cadastroControllerApp", []);

cadastroControllerApp.controller("ClienteController", function($scope, $http) {
	
	$scope.id = null;
	$scope.nome = null;
	$scope.cidade = null;
	$scope.endereco = null;
	$scope.telefone = null;
	$scope.mensagem = null;
	$scope.errosValidacao = null;
	
	$scope.salvarCliente = function() {
		
		var clienteModel = $scope.iniciaClienteModel();
		
		$http.post("/angular-springmvc/clientes/salva", clienteModel).then(function(response) {
			if(response.data.status == "SUCESSO") {
				$scope.mensagem = "Cliente incluído com sucesso !!";
			} else {
				$scope.errosValidacao = [];
				for(i=0; i < response.data.result.length; i++) {
					$scope.errosValidacao[i] = response.data.result[i].code;
				}
			}
		}, function(response) {
			$scope.mensagem = "Houve um erro ao incluir o cliente !!";
		});
		
	};
	
	$scope.alterarCliente = function() {
		
		var clienteModel = $scope.iniciaClienteModel();
		
		$http.put("/angular-springmvc/clientes/altera", clienteModel).then(function(response) {
			if(response.data.status == "SUCESSO") {
				$scope.mensagem = "Cliente alterado com sucesso !!";
			} else {
				$scope.errosValidacao = [];
				for(i=0; i < response.data.result.length; i++) {
					$scope.errosValidacao[i] = response.data.result[i].code;
				}
			}
		}, function(response) {
			$scope.mensagem = "Houve um erro ao alterar o cliente !!";
		});
		
	};
	
	$scope.submit = function(id) {
		console.log(id);
		if(id) {
			$scope.alterarCliente();
		} else {
			$scope.salvarCliente();
		}		
	};
	
	$scope.iniciaClienteModel = function() {
		var clienteModel = new Object();
		clienteModel.id = $scope.id;
		clienteModel.nome = $scope.nome;
		clienteModel.cidade = $scope.cidade;
		clienteModel.endereco = $scope.endereco;
		clienteModel.telefone = $scope.telefone;
		return clienteModel;
	}
	
});
