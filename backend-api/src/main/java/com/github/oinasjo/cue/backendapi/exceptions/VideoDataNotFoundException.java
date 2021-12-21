package com.github.oinasjo.cue.backendapi.exceptions;

public class VideoDataNotFoundException extends RuntimeException {

	private static final long serialVersionUID = -2506698531418461569L;

	public VideoDataNotFoundException(Long id) {
		super("Could not find a video with id " + id);
	}
}
