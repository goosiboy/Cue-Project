package com.github.oinasjo.cue.backendapi.assembler;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

import com.github.oinasjo.cue.backendapi.controllers.VideoDataController;
import com.github.oinasjo.cue.backendapi.entities.VideoData;

/**
 * Helper class for creating links as specified by the HATEOAS - specification
 * 
 * @author jonyoinas
 *
 */
@Component
public class VideoDataModelAssembler implements RepresentationModelAssembler<VideoData, EntityModel<VideoData>> {

	/**
	 * Converts a non-model objects into a model-based objects
	 */
	@Override
	public EntityModel<VideoData> toModel(VideoData videoData) {
		return EntityModel.of(videoData, //
				linkTo(methodOn(VideoDataController.class).one(videoData.getId())).withSelfRel(),
				linkTo(methodOn(VideoDataController.class).all()).withRel("videos"));
	}
}
