package br.com.angularspringmvc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ValidationUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.angularspringmvc.model.AjaxResponse;
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
	public AjaxResponse salva(@RequestBody Cliente clienteModel, BindingResult errors) {
		AjaxResponse response = new AjaxResponse();
		
		ValidationUtils.rejectIfEmpty(errors, "nome", "O campo nome não pode ser vazio !");
		ValidationUtils.rejectIfEmpty(errors, "cidade", "O campo cidade não pode ser vazio !");
		ValidationUtils.rejectIfEmpty(errors, "endereco", "O campo endereço não pode ser vazio !");
		ValidationUtils.rejectIfEmpty(errors, "telefone", "O campo telefone não pode ser vazio !");
		
		if(!errors.hasErrors()) {
			service.salva(clienteModel);
			response.setStatus("SUCESSO");
		} else {
			response.setStatus("ERRO");
			response.setResult(errors.getAllErrors());
		}
		
		return response;
	}
	
}
