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

	<form ng-controller="ClienteController">
		<div>
			{{mensagem}}
		</div>
		<div data-ng-repeat="erro in errosValidacao">
			{{erro}}<br/>
		</div>
		<input type="hidden" ng-model="id" ng-init="id='${cliente.id}'" >
		<div>
			<label for="nome">Nome</label>
			<div>
				<input type="text" ng-model="nome" ng-init="nome='${cliente.nome}'" />
			</div>
		</div>
		<div>
			<label for="nome">Cidade</label>
			<div>
				<input type="text" ng-model="cidade" ng-init="cidade='${cliente.cidade}'" />
			</div>
		</div>
		<div>
			<label for="nome">Endereço</label>
			<div>
				<input type="text" ng-model="endereco" ng-init="endereco='${cliente.endereco}'" />
			</div>
		</div>
		<div>
			<label for="nome">Telefone</label>
			<div>
				<input type="text" ng-model="telefone" ng-init="telefone='${cliente.telefone}'" />
			</div>
		</div>
		<div>
			<input type="button" value="{{id ? 'Alterar' : 'Salvar'}}" ng-click="submit(id)" />
		</div>
	</form>

</body>
</html>