package com.assignment.july26;
import java.util.Scanner;

public class SumOfSeries {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the number of first natural numbers to add: ");
		int n = sc.nextInt();
		int sum=0;
		for(int i=1;i<=n;i++)
			sum += i;
		System.out.println("The sum of first " + n + " natural numbers is " + sum);

	}

}
