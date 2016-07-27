<div>
	<table data-ng-repeat="cliente in listagemCtrl.listaClientes">
		<tr>
			<td>{{cliente.nome}}</td>
			<td><a href="/angular-springmvc/clientes/edita/{{cliente.id}}">Alterar</a></td>
			<td><a href="#" ng-click="listagemCtrl.deletarCliente(cliente.id)">Deletar</a></td>
		</tr>
	</table>
</div>
