package br.com.angularspringmvc.service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import br.com.angularspringmvc.model.Cliente;

@Service
@Transactional
public class ClienteService {

	@PersistenceContext
	private EntityManager manager;
	
	public void salva(Cliente cliente) {
		manager.persist(cliente);
	}

	public void altera(Cliente cliente) {
		manager.merge(cliente);
	}
	
	public Cliente buscaPorId(Long id) {
		return manager.find(Cliente.class, id);
	}
	
}
