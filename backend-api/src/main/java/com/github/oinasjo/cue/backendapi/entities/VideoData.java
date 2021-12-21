package com.github.oinasjo.cue.backendapi.entities;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.github.oinasjo.cue.backendapi.VideoLifeCycle;

@Entity
public class VideoData {

	private @Id @GeneratedValue Long id;
	private String name;
	private String url;
	private VideoLifeCycle status;

	public VideoData() {
		// Empty constructor
	}

	public VideoData(String name, String url, VideoLifeCycle status) {
		setName(name);
		setUrl(url);
		setStatus(status);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public VideoLifeCycle getStatus() {
		return status;
	}

	public void setStatus(VideoLifeCycle status) {
		this.status = status;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, name, status, url);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		VideoData other = (VideoData) obj;
		return Objects.equals(id, other.id) && Objects.equals(name, other.name) && status == other.status
				&& Objects.equals(url, other.url);
	}

	@Override
	public String toString() {
		return "VideoData [id=" + id + ", name=" + name + ", url=" + url + ", status=" + status + "]";
	}

}