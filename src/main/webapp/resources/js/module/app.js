var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
	
	$routeProvider.when("/angular-springmvc", {
		templateUrl: "/"
	}).when("/clientes/novo", {
		templateUrl: "/angular-springmvc/clientes/novo",
		controller: "ClienteController",
		controllerAs: "clienteCtrl"
	}).when("/clientes/listagem", {
		templateUrl: "/angular-springmvc/clientes/listagem",
		controller: "ListagemController",
		controllerAs: "listagemCtrl"
	}).when("/clientes/edita/:id", {
		templateUrl: function(params) {
			return  "/angular-springmvc/clientes/edita/" + params.id;
		},
		controller: "ClienteController",
		controllerAs: "clienteCtrl"
	}).otherwise({
		redirectTo: "/"
	});
	
	$locationProvider.html5Mode(true);
	
})