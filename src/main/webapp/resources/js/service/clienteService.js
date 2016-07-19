angular.module("app").factory("ClienteService", ClienteService);

ClienteService.$inject = ["$http", "$q"];

function ClienteService($http, $q) {
	var service = {
		salvarCliente: salvarCliente,
		alterarCliente: alterarCliente,
		deletarCliente: deletarCliente
	};
	
	return service;
	
	function salvarCliente(cliente) {
		return $http.post("/angular-springmvc/clientes/novo/salvar", cliente).then(function(response) {
			return response.data;
		}, function(errResponse) {
			return $q.reject(errResponse);
		});
	}
	
	function alterarCliente(cliente) {
		
		return $http.put("/angular-springmvc/clientes/edita/salvar", cliente).then(function(response) {
			return response.data;
		}, function(errResponse) {
			$q.reject(errResponse);
		});
		
	};
	
	function deletarCliente(id) {
		
		return $http.delete("/angular-springmvc/clientes/deleta/" + id).then(function(response) {
			return response.data;
		}, function(errResponse) {
			$q.reject(errResponse);
		});
		
	};
}
