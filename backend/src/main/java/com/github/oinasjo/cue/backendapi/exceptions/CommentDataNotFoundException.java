package com.github.oinasjo.cue.backendapi.exceptions;

public class CommentDataNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 630240169174655913L;

	public CommentDataNotFoundException(Long id) {
		super("Could not find a comment with id " + id);
	}

}
