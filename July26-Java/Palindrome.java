package com.assignment.july26;
import java.util.Scanner;

public class Palindrome {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the number to check for palindrome: ");
		int n = sc.nextInt();
		int orig = n;
		int rev = 0,r;
		while(n>0) {
			r = n%10;
			rev = rev*10 + r;
			n = n/10;
		}
		if(orig==rev)
			System.out.println("The number is a palindrome");
		else
			System.out.println("The number is not a palindrome");
		
	}

}
