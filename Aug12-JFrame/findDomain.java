package com.assignment.aug12;

public class findDomain {

	public static void find(String str) {
		String user = str.substring(0, str.lastIndexOf('@'));
		System.out.println("Username - " + user);
		String domain = str.substring(str.lastIndexOf('@')+1, str.lastIndexOf("."));
		System.out.println("Domain - " + domain);
	}
	
	public static void main(String[] args) {
		find("ayu.sh.7.gu.pta@gmail.com");
	}

}
