<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html ng-app="app">
<head>
	<title>Clientes</title>
	<script src="<c:url value="/resources/js/angular.min.js"/>"></script>
	<script src="<c:url value="/resources/js/angular-route.min.js"/>"></script>
	<script src="<c:url value="/resources/js/module/app.js"/>"></script>
	<script src="<c:url value="/resources/js/cliente/clienteController.js"/>"></script>
	<script src="<c:url value="/resources/js/cliente/clienteService.js"/>"></script>
	<script src="<c:url value="/resources/js/cliente/listagem.js"/>"></script>
	
	<base href="/angular-springmvc/" />
</head>
<body>

	<ul>
		<li><a href="clientes/novo">Adicionar</a></li>
		<li><a href="clientes/listagem">Listagem</a></li>
	</ul>

	<div ng-view></div>

</body>
</html>