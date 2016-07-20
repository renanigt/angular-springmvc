package br.com.angularspringmvc.model;

public class ResponseModel {

	private ResponseModelStatus status;
	private Object result;

	public ResponseModelStatus getStatus() {
		return status;
	}
	public void setStatus(ResponseModelStatus status) {
		this.status = status;
	}
	public Object getResult() {
		return result;
	}
	public void setResult(Object result) {
		this.result = result;
	}
	
}
