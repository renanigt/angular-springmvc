<%@page contentType="text/html; charset=UTF-8" %>
    
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html ng-app="app">
<head>
	<title>Cadastro de Clientes</title>
	<script src="<c:url value="/resources/js/angular.min.js"/>"></script>
	<script src="<c:url value="/resources/js/module/app.js"/>"></script>
	<script src="<c:url value="/resources/js/cliente/listagem.js"/>"></script>
	<script src="<c:url value="/resources/js/cliente/clienteService.js"/>"></script>
</head>
<body ng-controller="ListagemController as listagemCtrl">

	<div>
		<table data-ng-repeat="cliente in listagemCtrl.listaClientes">
			<tr>
				<td>{{cliente.nome}}</td>
				<td><a href="<c:url value="/clientes/edita/{{cliente.id}}" />">Alterar</a></td>
				<td><a href="#" ng-click="listagemCtrl.deletarCliente(cliente.id)">Deletar</a></td>
			</tr>
		</table>
	</div>

</body>
</html>
