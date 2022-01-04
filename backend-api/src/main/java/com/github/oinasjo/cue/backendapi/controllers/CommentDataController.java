package com.github.oinasjo.cue.backendapi.controllers;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.IanaLinkRelations;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.github.oinasjo.cue.backendapi.assembler.CommentDataModelAssembler;
import com.github.oinasjo.cue.backendapi.entities.CommentData;
import com.github.oinasjo.cue.backendapi.exceptions.CommentDataNotFoundException;
import com.github.oinasjo.cue.backendapi.repository.CommentDataRepository;
import com.github.oinasjo.cue.backendapi.util.Consts;

/**
 * Controller for fetching comment data from the database
 * 
 * @author jonyoinas
 *
 */
@RestController
public class CommentDataController {

	private final CommentDataRepository repository;
	private final CommentDataModelAssembler assembler;

	public CommentDataController(CommentDataRepository repository, CommentDataModelAssembler assembler) {
		this.repository = repository;
		this.assembler = assembler;
	}

	@PostMapping(Consts.COMMENTS_ROUTE_URL)
	public ResponseEntity<EntityModel<CommentData>> newCommentData(@RequestBody CommentData commentData) {
		EntityModel<CommentData> entityModel = assembler.toModel(repository.save(commentData));

		return ResponseEntity //
				.created(entityModel.getRequiredLink(IanaLinkRelations.SELF).toUri()) //
				.body(entityModel);
	}

	@GetMapping(Consts.COMMENTS_ROUTE_URL)
	public CollectionModel<EntityModel<CommentData>> all() {

		List<EntityModel<CommentData>> comments = repository.findAll().stream().map(assembler::toModel)
				.collect(Collectors.toList());

		return CollectionModel.of(comments, linkTo(methodOn(CommentDataController.class).all()).withSelfRel());

	}

	@GetMapping(Consts.COMMENTS_ROUTE_URL + "/{id}")
	public EntityModel<CommentData> one(@PathVariable Long id) {
		CommentData commentData = repository.findById(id).orElseThrow(() -> new CommentDataNotFoundException(id));

		return assembler.toModel(commentData);
	}

}
