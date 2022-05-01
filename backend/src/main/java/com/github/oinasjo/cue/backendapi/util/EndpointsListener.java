package com.github.oinasjo.cue.backendapi.util;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;

@Component
public class EndpointsListener implements ApplicationListener<ContextRefreshedEvent> {

	private List<String> endpoints = new ArrayList<>();

	@Override
	public void onApplicationEvent(ContextRefreshedEvent event) {
		ApplicationContext applicationContext = event.getApplicationContext();
		applicationContext.getBean(RequestMappingHandlerMapping.class).getHandlerMethods().forEach((key, value) -> {
			endpoints.add(key.toString());
		});
	}

	/**
	 * @return the endpoints
	 */
	public List<String> getEndpoints() {
		return Collections.unmodifiableList(endpoints);
	}

	/**
	 * @param endpoints the endpoints to set
	 */
	public void setEndpoints(List<String> endpoints) {
		this.endpoints = endpoints;
	}
}
