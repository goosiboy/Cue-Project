package com.github.oinasjo.cue.backendapi.assembler;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

import com.github.oinasjo.cue.backendapi.controllers.CommentDataController;
import com.github.oinasjo.cue.backendapi.entities.CommentData;
import com.github.oinasjo.cue.backendapi.exceptions.AssemblerException;

/**
 * Helper class for creating links as specified by the HATEOAS - specification
 * 
 * @author jonyoinas
 *
 */
@Component
public class CommentDataModelAssembler implements RepresentationModelAssembler<CommentData, EntityModel<CommentData>> {

	/**
	 * Converts a non-model objects into a model-based objects
	 */
	@Override
	public EntityModel<CommentData> toModel(CommentData commentData) {

		if (commentData == null) {
			throw new AssemblerException("Object was empty");
		}

		return buildDataModel(commentData);

	}

	private EntityModel<CommentData> buildDataModel(CommentData commentData) {
		return EntityModel.of(commentData, //
				linkTo(methodOn(CommentDataController.class).one(commentData.getId())).withSelfRel(),
				linkTo(methodOn(CommentDataController.class).all()).withRel("comments"));
	}

}
