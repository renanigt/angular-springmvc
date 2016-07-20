package br.com.angularspringmvc.model;

public class AjaxResponse {

	private AjaxStatus status;
	private Object result;

	public AjaxStatus getStatus() {
		return status;
	}
	public void setStatus(AjaxStatus status) {
		this.status = status;
	}
	public Object getResult() {
		return result;
	}
	public void setResult(Object result) {
		this.result = result;
	}
	
}
