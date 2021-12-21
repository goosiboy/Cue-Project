package com.github.oinasjo.cue.backendapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.github.oinasjo.cue.backendapi.entities.VideoData;

public interface VideoDataRepository extends JpaRepository<VideoData, Long> {
}
