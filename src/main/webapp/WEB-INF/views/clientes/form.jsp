<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html ng-app="cadastroControllerApp">
<head>
	<title>Cadastro de Clientes</title>
	<script src="<c:url value="/resources/js/angular/angular.min.js"/>"></script>
	<script src="<c:url value="/resources/js/cadastroController.js"/>"></script>
</head>
<body>

	<div>
		{{mensagem}}
	</div>

	<form ng-controller="cadastroController">
		<div>
			{{mensagem}}
		</div>
		<div>
			<label for="nome">Nome</label>
			<input type="text" name="nome" id="nome" ng-model="nome" />
		</div>
		<div>
			<label for="nome">Cidade</label>
			<input type="text" name="cidade" id="cidade" ng-model="cidade" />
		</div>
		<div>
			<label for="nome">Endereço</label>
			<input type="text" name="endereco" id="endereco" ng-model="endereco" />
		</div>
		<div>
			<label for="nome">Telefone</label>
			<input type="text" name="telefone" id="telefone" ng-model="telefone" />
		</div>
		<div>
			<input type="button" value="Salvar" ng-click="salvarCliente()" />
		</div>
	</form>

</body>
</html>