package com.assignment.july26;
import java.util.Scanner;

public class Factorial {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the number to calculate its factorial: ");
		int n = sc.nextInt();
		int fact=1;
		for(int i=1;i<=n;i++)
			fact *= i;
		System.out.println("The factorial " + n + " is " + fact);

	}

}