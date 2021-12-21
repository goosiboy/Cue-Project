package com.github.oinasjo.cue.backendapi;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.github.oinasjo.cue.backendapi.entities.VideoData;
import com.github.oinasjo.cue.backendapi.repository.VideoDataRepository;

/**
 * Preloads the H2 - database with data
 * 
 * @author jonyoinas
 *
 */
@Configuration
public class H2Preloader {

	private static final Logger log = LoggerFactory.getLogger(H2Preloader.class);

	@Bean
	public CommandLineRunner initDatabase(VideoDataRepository repository) {

		return args -> {
			log.info("Preloading {}", repository.save(
					new VideoData("I'm Alive", "https://www.youtube.com/watch?v=tbAK2Rz_tzE", VideoLifeCycle.WAITING)));
		};
	}

}
