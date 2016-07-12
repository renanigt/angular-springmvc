var cadastroControllerApp = angular.module("cadastroControllerApp", []);

cadastroControllerApp.controller("cadastroController", function($scope, $window, $http) {
	
	$scope.nome = null;
	$scope.cidade = null;
	$scope.endereco = null;
	$scope.telefone = null;
	$scope.mensagem = null;
	
	$scope.salvarCliente = function() {
		
		var clienteModel = new Object();
		clienteModel.nome = $scope.nome;
		clienteModel.cidade = $scope.cidade;
		clienteModel.endereco = $scope.endereco;
		clienteModel.telefone = $scope.telefone;
		
		$http.post("/angular-springmvc/clientes/salva", clienteModel).then(function(response) {
			$scope.mensagem = "Cliente incluído com sucesso !!";
		}, function(response) {
			$scope.mensagem = "Houve um erro ao incluir o cliente !!";
		});
		
	};
	
});
