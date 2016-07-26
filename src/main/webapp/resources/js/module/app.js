var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider.when("/clientes/novo", {
		templateUrl: "clientes/novo",
		controller: "ClienteController",
		controllerAs: "clienteCtrl"
	}).when("/clientes/listagem", {
		templateUrl: "clientes/listagem",
		controller: "ListagemController",
		controllerAs: "listagemCtrl"
	}).when("/clientes/edita/:id", {
		templateUrl: function(params) {
			return  "clientes/edita/" + params.id;
		},
		controller: "ClienteController",
		controllerAs: "clienteCtrl"
	}).otherwise({
		redirectTo: "/"
	});
})