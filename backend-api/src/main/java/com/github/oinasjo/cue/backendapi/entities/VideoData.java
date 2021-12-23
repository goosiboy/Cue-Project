package com.github.oinasjo.cue.backendapi.entities;

import java.util.Date;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

import com.github.oinasjo.cue.backendapi.VideoLifeCycle;

@Entity
public class VideoData {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "videoData_generator")
	@SequenceGenerator(name = "videoData_generator", sequenceName = "videoData_seq", allocationSize = 50)
	@Column(name = "id", updatable = false, nullable = false)
	private Long id;

	private String videoTitle;

	@Column(length = 600)
	private String url;

	@Column(nullable = false)
	private Date date;

	private VideoLifeCycle status;

	public VideoData() {
		// Empty constructor
	}

	public VideoData(String videoTitle, String url, VideoLifeCycle status, Date date) {
		setVideoTitle(videoTitle);
		setUrl(url);
		setStatus(status);
		setDate(date);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getVideoTitle() {
		return videoTitle;
	}

	public void setVideoTitle(String videoTitle) {
		this.videoTitle = videoTitle;
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

	/**
	 * @return the date
	 */
	public Date getDate() {
		return date;
	}

	/**
	 * @param date the date to set
	 */
	public void setDate(Date date) {
		this.date = date;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, videoTitle, status, url);
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
		return Objects.equals(id, other.id) && Objects.equals(videoTitle, other.videoTitle) && status == other.status
				&& Objects.equals(url, other.url);
	}

	@Override
	public String toString() {
		return "VideoData [id=" + id + ", videoTitle=" + videoTitle + ", url=" + url + ", status=" + status + "]";
	}

}
