angular.module("app").factory("ClienteService", ClienteService);

ClienteService.$inject = ["$http", "$q"];

function ClienteService($http, $q) {
	var service = {
		salvarCliente: salvarCliente,
		alterarCliente: alterarCliente
	};
	
	return service;
	
	function salvarCliente(cliente) {
		return $http.post("/angular-springmvc/clientes/salva", cliente).then(function(response) {
			return response.data;
		}, function(errResponse) {
			return $q.reject(errResponse);
		});
	}
	
	function alterarCliente(cliente) {
		
		return $http.put("/angular-springmvc/clientes/altera", cliente).then(function(response) {
			return response.data;
		}, function(errResponse) {
			$q.reject(errResponse);
		});
		
	};
}
