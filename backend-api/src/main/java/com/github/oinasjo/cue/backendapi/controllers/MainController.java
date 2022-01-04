package com.github.oinasjo.cue.backendapi.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.github.oinasjo.cue.backendapi.util.EndpointsListener;

@RestController
public class MainController {

	public static final String TAB = "&nbsp;&nbsp;&nbsp;&nbsp;";

	@Autowired
	private EndpointsListener endpointsListener;

	@Value("${server.port}")
	public String port;

	@Value("${app.version}")
	public String appVersion;

	@GetMapping("/")
	public String main() {
		return "Application alive at port " + port;
	}

	@GetMapping("/api")
	public String apiDescription() {
		return buildApiDescription();
	}

	private String buildApiDescription() {

		StringBuilder builder = new StringBuilder();

		String mainTitle = "<h2>Cue-Project API v" + appVersion + "</h2>";
		String subTitle = "<b>Available API routes:</b> <br /><br /> ";

		builder.append(mainTitle).append(subTitle);
		for (String endpoint : endpointsListener.getEndpoints()) {
			builder.append(endpoint).append("<br />");
		}

		return builder.toString();
	}

}
