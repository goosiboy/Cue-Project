package com.github.oinasjo.cue.backendapi.util;

import com.google.gson.Gson;

public class Utils {

	private Gson gson = new Gson();

	public String buildToJsonString(Object classToBeStringified) {
		return gson.toJson(classToBeStringified);
	}

	public Object buildToObject(String stringToBeBuilt, Class<Object> classOfT) {
		return gson.fromJson(stringToBeBuilt, classOfT);
	}

}
