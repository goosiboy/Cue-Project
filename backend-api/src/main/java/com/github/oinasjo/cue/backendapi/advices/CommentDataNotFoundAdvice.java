package com.github.oinasjo.cue.backendapi.advices;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.github.oinasjo.cue.backendapi.exceptions.CommentDataNotFoundException;

@ControllerAdvice
public class CommentDataNotFoundAdvice {

	@ResponseBody
	@ExceptionHandler(CommentDataNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	public String commentDataNotFoundHandler(CommentDataNotFoundException ex) {
		return ex.getMessage();
	}

}
