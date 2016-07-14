<%@page contentType="text/html; charset=UTF-8" %>
    
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html ng-app="cadastroControllerApp">
<head>
	<title>Cadastro de Clientes</title>
	<script src="<c:url value="/resources/js/angular/angular.min.js"/>"></script>
	<script src="<c:url value="/resources/js/clienteController.js"/>"></script>
</head>
<body>

	<form ng-controller="ClienteController as clienteCtrl">
		<div>
			{{clienteCtrl.mensagem}}
		</div>
		<div data-ng-repeat="erro in clienteCtrl.errosValidacao">
			{{erro}}<br/>
		</div>
		<input type="hidden" ng-model="clienteCtrl.id" ng-init="clienteCtrl.id='${cliente.id}'" >
		<div>
			<label>Nome</label>
			<div>
				<input type="text" ng-model="clienteCtrl.nome" ng-init="clienteCtrl.nome='${cliente.nome}'" />
			</div>
		</div>
		<div>
			<label>Cidade</label>
			<div>
				<input type="text" ng-model="clienteCtrl.cidade" ng-init="clienteCtrl.cidade='${cliente.cidade}'" />
			</div>
		</div>
		<div>
			<label>Endereço</label>
			<div>
				<input type="text" ng-model="clienteCtrl.endereco" ng-init="clienteCtrl.endereco='${cliente.endereco}'" />
			</div>
		</div>
		<div>
			<label>Telefone</label>
			<div>
				<input type="text" ng-model="clienteCtrl.telefone" ng-init="clienteCtrl.telefone='${cliente.telefone}'" />
			</div>
		</div>
		<div>
			<input type="button" value="{{clienteCtrl.id ? 'Alterar' : 'Salvar'}}" ng-click="clienteCtrl.submit(clienteCtrl.id)" />
		</div>
	</form>

</body>
</html>