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

import br.com.angularspringmvc.model.ResponseModel;
import br.com.angularspringmvc.model.ResponseModelStatus;
import br.com.angularspringmvc.model.Cliente;
import br.com.angularspringmvc.service.ClienteService;

@Controller
public class ClienteController {

	@Autowired
	private ClienteService service;
	
	@RequestMapping("/clientes/novo")
	public String novo() {
		return "clientes/form";
	}
	
	@RequestMapping(value = "/clientes/novo/salvar", method = RequestMethod.POST)
	@ResponseBody
	public ResponseModel salva(@RequestBody Cliente clienteModel, BindingResult errors) {
		ResponseModel response = new ResponseModel();
		
		validaCliente(errors);
		
		if(!errors.hasErrors()) {
			service.salva(clienteModel);
			response.setStatus(ResponseModelStatus.SUCESSO);
		} else {
			response.setStatus(ResponseModelStatus.ERRO);
			response.setResult(errors.getAllErrors());
		}
		
		return response;
	}
	
	@RequestMapping("/clientes/edita/{id}")
	public ModelAndView edita(@PathVariable("id") Long id) {
		Cliente cliente = service.buscaPorId(id);
		ModelAndView modelAndView = new ModelAndView("clientes/form");
		modelAndView.addObject("cliente", cliente);
		return modelAndView;
	}
	
	@RequestMapping(value = "/clientes/edita/salvar", method = RequestMethod.PUT)
	@ResponseBody
	public ResponseModel altera(@RequestBody Cliente clienteModel, BindingResult errors) {
		ResponseModel response = new ResponseModel();
		
		validaCliente(errors);
		
		if(!errors.hasErrors()) {
			service.altera(clienteModel);
			response.setStatus(ResponseModelStatus.SUCESSO);
		} else {
			response.setStatus(ResponseModelStatus.ERRO);
			response.setResult(errors.getAllErrors());
		}
		
		return response;
	}
	
	@RequestMapping(value = "/clientes/deleta/{id}", method = RequestMethod.DELETE)
	@ResponseBody
	public ResponseModel remove(@PathVariable("id") Long id) {
		ResponseModel response = new ResponseModel();
		service.remove(id);
		response.setStatus(ResponseModelStatus.SUCESSO);
		
		return response;
	}

	private void validaCliente(BindingResult errors) {
		ValidationUtils.rejectIfEmpty(errors, "nome", "O campo nome não pode ser vazio !");
		ValidationUtils.rejectIfEmpty(errors, "cidade", "O campo cidade não pode ser vazio !");
		ValidationUtils.rejectIfEmpty(errors, "endereco", "O campo endereço não pode ser vazio !");
		ValidationUtils.rejectIfEmpty(errors, "telefone", "O campo telefone não pode ser vazio !");
	}
	
}
