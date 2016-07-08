<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
<title>Cadastro de Clientes</title>
</head>
<body>

	<form method="post" action="<c:url value="/clientes/salva"/>">
		<div>
			<label for="nome">Nome</label>
			<input type="text" name="nome" id="nome" />
		</div>
		<div>
			<label for="nome">Cidade</label>
			<input type="text" name="cidade" id="cidade" />
		</div>
		<div>
			<label for="nome">Endereço</label>
			<input type="text" name="endereco" id="endereco" />
		</div>
		<div>
			<label for="nome">Telefone</label>
			<input type="text" name="telefone" id="telefone" />
		</div>
		<div>
			<input type="submit" value="Enviar" />
		</div>
	</form>

</body>
</html>