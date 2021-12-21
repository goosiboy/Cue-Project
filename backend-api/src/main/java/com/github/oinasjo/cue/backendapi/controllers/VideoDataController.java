package com.github.oinasjo.cue.backendapi.controllers;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.IanaLinkRelations;
import org.springframework.hateoas.MediaTypes;
import org.springframework.hateoas.mediatype.problem.Problem;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.github.oinasjo.cue.backendapi.VideoLifeCycle;
import com.github.oinasjo.cue.backendapi.assembler.VideoDataModelAssembler;
import com.github.oinasjo.cue.backendapi.entities.VideoData;
import com.github.oinasjo.cue.backendapi.exceptions.VideoDataNotFoundException;
import com.github.oinasjo.cue.backendapi.repository.VideoDataRepository;

@RestController
public class VideoDataController {

	private final VideoDataRepository repository;
	private final VideoDataModelAssembler assembler;

	public VideoDataController(VideoDataRepository repository, VideoDataModelAssembler assembler) {
		this.repository = repository;
		this.assembler = assembler;
	}

	@GetMapping("/videos")
	public CollectionModel<EntityModel<VideoData>> all() {

		List<EntityModel<VideoData>> videos = repository.findAll().stream().map(assembler::toModel)
				.collect(Collectors.toList());

		return CollectionModel.of(videos, linkTo(methodOn(VideoDataController.class).all()).withSelfRel());

	}

	@PostMapping("/videos")
	public ResponseEntity<EntityModel<VideoData>> newVideoData(@RequestBody VideoData videoData) {
		EntityModel<VideoData> entityModel = assembler.toModel(repository.save(videoData));

		return ResponseEntity //
				.created(entityModel.getRequiredLink(IanaLinkRelations.SELF).toUri()) //
				.body(entityModel);
	}

	@PutMapping("/videos/{id}")
	public ResponseEntity<EntityModel<VideoData>> replaceVideo(@RequestBody VideoData newVideoData,
			@PathVariable Long id) {

		VideoData updatedVideoData = repository.findById(id).map(video -> {
			video.setName(newVideoData.getName());
			video.setUrl(newVideoData.getUrl());
			return repository.save(video);
		}).orElseGet(() -> {
			newVideoData.setId(id);
			return repository.save(newVideoData);
		});

		EntityModel<VideoData> entityModel = assembler.toModel(updatedVideoData);

		return ResponseEntity.created(entityModel.getRequiredLink(IanaLinkRelations.SELF).toUri()).body(entityModel);
	}

	@GetMapping("/videos/{id}")
	public EntityModel<VideoData> one(@PathVariable Long id) {
		VideoData videoData = repository.findById(id).orElseThrow(() -> new VideoDataNotFoundException(id));

		return assembler.toModel(videoData);

	}

	@DeleteMapping("/videos/{id}")
	public ResponseEntity<Object> deleteVideoData(@PathVariable Long id) {
		repository.deleteById(id);
		return ResponseEntity.noContent().build();
	}

	@DeleteMapping("/videos/{id}/cancel")
	public ResponseEntity<?> cancel(@PathVariable Long id) {

		VideoData videoData = repository.findById(id) //
				.orElseThrow(() -> new VideoDataNotFoundException(id));

		if (videoData.getStatus() == VideoLifeCycle.WAITING) {
			videoData.setStatus(VideoLifeCycle.CANCELLED);
			return ResponseEntity.ok(assembler.toModel(repository.save(videoData)));
		}

		return ResponseEntity //
				.status(HttpStatus.METHOD_NOT_ALLOWED) //
				.header(HttpHeaders.CONTENT_TYPE, MediaTypes.HTTP_PROBLEM_DETAILS_JSON_VALUE) //
				.body(Problem.create() //
						.withTitle("Method not allowed") //
						.withDetail("You can't cancel a video that is in the " + videoData.getStatus() + " status"));
	}

	@PutMapping("/videos/{id}/complete")
	public ResponseEntity<?> complete(@PathVariable Long id) {

		VideoData videoData = repository.findById(id) //
				.orElseThrow(() -> new VideoDataNotFoundException(id));

		if (videoData.getStatus() == VideoLifeCycle.PLAYING) {
			videoData.setStatus(VideoLifeCycle.COMPLETED);
			return ResponseEntity.ok(assembler.toModel(repository.save(videoData)));
		}

		return ResponseEntity //
				.status(HttpStatus.METHOD_NOT_ALLOWED) //
				.header(HttpHeaders.CONTENT_TYPE, MediaTypes.HTTP_PROBLEM_DETAILS_JSON_VALUE) //
				.body(Problem.create() //
						.withTitle("Method not allowed") //
						.withDetail("You can't complete a video that is in the " + videoData.getStatus() + " status"));
	}

}
