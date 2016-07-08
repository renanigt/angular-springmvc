package br.com.angularspringmvc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

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
	
	@RequestMapping("/clientes/salva")
	public String salva(Cliente cliente) {
		service.salva(cliente);
		return "clientes/ok";
	}
	
}
