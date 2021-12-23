package com.github.oinasjo.cue.backendapi.entities;

import java.util.Date;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
public class CommentData {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "commentData_generator")
	@SequenceGenerator(name = "commentData_generator", sequenceName = "commentData_seq", allocationSize = 50)
	@Column(name = "id", updatable = false, nullable = false)
	private Long id;

	@Column(length = 60)
	private String name;

	@Column(length = 120)
	private String comment;

	@Column(updatable = false, nullable = false)
	private Date date;

	public CommentData() {
		// Empty constructor
	}

	public CommentData(String name, String comment, Date date) {
		setName(name);
		setComment(comment);
		setDate(date);
	}

	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the comment
	 */
	public String getComment() {
		return comment;
	}

	/**
	 * @param comment the comment to set
	 */
	public void setComment(String comment) {
		this.comment = comment;
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
		return Objects.hash(comment, date, id, name);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		CommentData other = (CommentData) obj;
		return Objects.equals(comment, other.comment) && Objects.equals(date, other.date)
				&& Objects.equals(id, other.id) && Objects.equals(name, other.name);
	}

	@Override
	public String toString() {
		return "CommentData [id=" + id + ", name=" + name + ", comment=" + comment + ", date=" + date + "]";
	}

}
