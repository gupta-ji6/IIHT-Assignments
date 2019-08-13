package com.assignment.aug13;

public class StringExceptionHandling {

	public static void main(String[] args) {
		try {
			String str = "Ayush";
			char ch = str.charAt(10);
			System.out.println(ch);
		}
		
		catch (Exception e) {
			System.out.println("Your string index is out of bound");
		}
	}

}
