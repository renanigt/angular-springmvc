var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
	
	$routeProvider.when("/angular-springmvc", {
		templateUrl: "/"
	}).when("/angular-springmvc/clientes/novo", {
		templateUrl: "/angular-springmvc/clientes/novo",
		controller: "ClienteController",
		controllerAs: "clienteCtrl"
	}).when("/angular-springmvc/clientes/listagem", {
		templateUrl: "/angular-springmvc/clientes/listagem",
		controller: "ListagemController",
		controllerAs: "listagemCtrl"
	}).when("/angular-springmvc/clientes/edita/:id", {
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