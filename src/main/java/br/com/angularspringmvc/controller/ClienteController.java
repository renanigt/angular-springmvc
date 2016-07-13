package br.com.angularspringmvc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ValidationUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import br.com.angularspringmvc.model.AjaxResponse;
import br.com.angularspringmvc.model.Cliente;
import br.com.angularspringmvc.service.ClienteService;

@Controller
public class ClienteController {

	@Autowired
	private ClienteService service;
	
	@RequestMapping("/clientes/add")
	public String cadastro() {
		return "clientes/form";
	}
	
	@RequestMapping(value = "/clientes/salva", method = RequestMethod.POST)
	@ResponseBody
	public AjaxResponse salva(@RequestBody Cliente clienteModel, BindingResult errors) {
		AjaxResponse response = new AjaxResponse();
		
		validaCliente(errors);
		
		if(!errors.hasErrors()) {
			service.salva(clienteModel);
			response.setStatus("SUCESSO");
		} else {
			response.setStatus("ERRO");
			response.setResult(errors.getAllErrors());
		}
		
		return response;
	}
	
	@RequestMapping("/clientes/edit/{id}")
	public ModelAndView edicao(@PathVariable("id") Long id) {
		Cliente cliente = service.buscaPorId(id);
		ModelAndView modelAndView = new ModelAndView("clientes/form");
		modelAndView.addObject("cliente", cliente);
		return modelAndView;
	}
	
	@RequestMapping(value = "/clientes/altera", method = RequestMethod.PUT)
	@ResponseBody
	public AjaxResponse altera(@RequestBody Cliente clienteModel, BindingResult errors) {
		AjaxResponse response = new AjaxResponse();
		
		validaCliente(errors);
		
		if(!errors.hasErrors()) {
			service.altera(clienteModel);
			response.setStatus("SUCESSO");
		} else {
			response.setStatus("ERRO");
			response.setResult(errors.getAllErrors());
		}
		
		return response;
	}

	private void validaCliente(BindingResult errors) {
		ValidationUtils.rejectIfEmpty(errors, "nome", "O campo nome não pode ser vazio !");
		ValidationUtils.rejectIfEmpty(errors, "cidade", "O campo cidade não pode ser vazio !");
		ValidationUtils.rejectIfEmpty(errors, "endereco", "O campo endereço não pode ser vazio !");
		ValidationUtils.rejectIfEmpty(errors, "telefone", "O campo telefone não pode ser vazio !");
	}
	
}
