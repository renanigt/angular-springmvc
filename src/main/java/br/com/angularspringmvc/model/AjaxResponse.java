package br.com.angularspringmvc.model;

public class AjaxResponse {

	private String status;
	private Object result;

	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Object getResult() {
		return result;
	}
	public void setResult(Object result) {
		this.result = result;
	}
	
}
