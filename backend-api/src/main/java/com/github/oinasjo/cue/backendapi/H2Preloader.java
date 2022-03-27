package com.github.oinasjo.cue.backendapi;

import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.github.oinasjo.cue.backendapi.entities.CommentData;
import com.github.oinasjo.cue.backendapi.entities.VideoData;
import com.github.oinasjo.cue.backendapi.repository.CommentDataRepository;
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

	private static final String PRELOADING = "Preloading {}";

	@Bean
	public CommandLineRunner initVideoDataDB(VideoDataRepository repository) {
		return args -> log.info(PRELOADING,
				repository.save(new VideoData("9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb2d", "I'm Alive",
						"https://www.youtube.com/watch?v=tbAK2Rz_tzE", VideoLifeCycle.WAITING, new Date())));
	}

	@Bean
	public CommandLineRunner initCommentDB(CommentDataRepository repository) {
		return args -> {
			log.info(PRELOADING, repository.save(new CommentData("9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb3d", "AngryBanana",
					"Nice video brooo!!!!", new Date())));
			log.info(PRELOADING, repository
					.save(new CommentData("9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb4d", "SadKiwi", "LMAO!!!", new Date())));
			log.info(PRELOADING, repository.save(new CommentData("9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb5d",
					"PretentiousApple", "What is this!!!", new Date())));
		};
	}

}
