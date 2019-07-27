package com.assignment.july26;

import java.util.Scanner;

public class CheckPrime {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the number to check for prime: ");
		int n = sc.nextInt();
		boolean flag = false;
		if (n==0 || n==1)
			System.out.println(n + " is not prime");
		else {
			for(int i=2; i<=(n/2)+1; i++) {
				if(n%i==0) {
					flag = false;
					break;
				}
				else
					flag = true;
			}
			
			if(flag)
				System.out.println(n + " is prime");
			else
				System.out.println(n + " is not prime");
		}

		}
}
