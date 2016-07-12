package br.com.angularspringmvc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.angularspringmvc.model.Cliente;
import br.com.angularspringmvc.service.ClienteService;

@Controller
public class ClienteController {

	@Autowired
	private ClienteService service;
	
	@RequestMapping("/clientes/form")
	public String cadastro() {
		return "clientes/form";
	}
	
	@RequestMapping(value = "/clientes/salva", method = RequestMethod.POST)
	@ResponseBody
	public void salva(@RequestBody Cliente clienteModel) {
		service.salva(clienteModel);
	}
	
}
