package br.com.angularspringmvc.service;

import java.util.List;

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

	public Cliente buscaPorId(Long id) {
		return manager.find(Cliente.class, id);
	}
	
	@SuppressWarnings("unchecked")
	public List<Cliente> listaTodos() {
		return manager.createQuery("FROM Cliente c ORDER BY c.nome").getResultList();
	}
	
	public void salva(Cliente cliente) {
		manager.persist(cliente);
	}

	public void altera(Cliente cliente) {
		manager.merge(cliente);
	}
	
	public void remove(Long id) {
		Cliente cliente = buscaPorId(id);
		manager.remove(cliente);
	}
	
}
