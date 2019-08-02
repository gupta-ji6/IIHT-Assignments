package com.assignment.july26;
import java.util.Scanner;

public class Pattern1 {

	public static void main(String[] args) {
		System.out.println("Enter number of lines: ");
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		for(int i=1;i<=n;i++) {
			for(int j=1;j<=i;j++) {
				System.out.print(j);
			}
			System.out.println("");
		}
	}

}
