package com.assignment.aug13;

public class ArrayExceptionHandling {

	public static void main(String[] args) {
		 try {
			 int arr[] = new int[5];
			 System.out.println(arr[6]);
		 }
		 
		 catch(Exception e) {
			 System.out.println("Your array index is out of bound");
		 }
	}

}
