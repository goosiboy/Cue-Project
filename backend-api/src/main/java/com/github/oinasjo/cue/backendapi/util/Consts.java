package com.github.oinasjo.cue.backendapi.util;

import org.springframework.expression.AccessException;

public class Consts {

	private Consts() throws AccessException {
		throw new AccessException("Cannot initialize an utility class");
	}

	public static final String BASE_ROUTE_URL = "/api";
	public static final String VIDEOS_ROUTE_URL = BASE_ROUTE_URL + "/videos";
	public static final String COMMENTS_ROUTE_URL = BASE_ROUTE_URL + "/comments";

}
