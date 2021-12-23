package com.github.oinasjo.cue.backendapi.exceptions;

public class AssemblerException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 3954809680042674609L;

	public AssemblerException() {
		super("An assembler exception occured");
	}

	public AssemblerException(String message) {
		super("An assembler exception occured: " + message);
	}

}
