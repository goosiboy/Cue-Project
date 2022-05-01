package com.github.oinasjo.cue.backendapi.advices;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.github.oinasjo.cue.backendapi.exceptions.VideoDataNotFoundException;

@ControllerAdvice
public class VideoDataNotFoundAdvice {

	@ResponseBody
	@ExceptionHandler(VideoDataNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	public String videoDataNotFoundHandler(VideoDataNotFoundException ex) {
		return ex.getMessage();
	}

}
