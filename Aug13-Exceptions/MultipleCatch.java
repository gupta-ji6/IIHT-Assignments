package com.assignment.aug13;

public class MultipleCatch {

	public static void main(String[] args) {
		try {
			String str = "Ayush";
			char ch = str.charAt(10);
			System.out.println(ch);
		}
		
		// Specific type of exceptions should be up in hierarchy
		catch (StringIndexOutOfBoundsException e) {
			System.out.println(e);
		}
		
		// Exception can handle all type of exceptions
		catch (Exception e) {
			System.out.println(e);
		}
		
		catch(Throwable t) {
			System.out.println(t);
		}
	}

}
