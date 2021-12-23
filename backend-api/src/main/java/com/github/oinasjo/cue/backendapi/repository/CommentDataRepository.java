package com.github.oinasjo.cue.backendapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.github.oinasjo.cue.backendapi.entities.CommentData;

public interface CommentDataRepository extends JpaRepository<CommentData, Long> {

	/**
	 * CommentData JPA repository interface
	 */

}
