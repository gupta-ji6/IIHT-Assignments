package com.ayush.user.model;

public class User {
	int user_id;
	String first_name;
	String last_name;
	String mobile;
	String email_id;
	String dob;
	String created_by;
	String creation_date;
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(int user_id, String first_name, String last_name, String mobile, String email_id, String dob,
			String created_by, String creation_date) {
		super();
		this.user_id = user_id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.mobile = mobile;
		this.email_id = email_id;
		this.dob = dob;
		this.created_by = created_by;
		this.creation_date = creation_date;
	}
	
	
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public String getFirst_name() {
		return first_name;
	}
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	public String getLast_name() {
		return last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getEmail_id() {
		return email_id;
	}
	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getCreated_by() {
		return created_by;
	}
	public void setCreated_by(String created_by) {
		this.created_by = created_by;
	}
	public String getCreation_date() {
		return creation_date;
	}
	public void setCreation_date(String creation_date) {
		this.creation_date = creation_date;
	}
	
	
}
