package com.assignment.july26;

import java.util.Scanner;

public class CalculateGrade {

	public static void grade(int x) {
		if(x >=75)
			System.out.println("Your grade for marks " + x + " is A");
		else if(x>=60 && x<75)
			System.out.println("Your grade for marks " + x + " is B");
		else if(x>=45 && x<60)
			System.out.println("Your grade for marks " + x + " is C");
		else if(x>=33 && x<45)
			System.out.println("Your grade for marks " + x + " is D");
		else if(x<33 && x>0)
			System.out.println("Your grade for marks " + x + " is F");
		else
			System.out.println("The marks you entered are invalid");
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int n;
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter your marks: ");
		n = sc.nextInt();
		grade(n);
	}

}
