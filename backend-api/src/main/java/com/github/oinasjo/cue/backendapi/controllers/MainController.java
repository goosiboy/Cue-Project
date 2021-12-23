package com.github.oinasjo.cue.backendapi.controllers;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

	@Value("${server.port}")
	public String port;

	@GetMapping("/")
	public String main() {
		return "Application alive at port " + port;
	}

}
