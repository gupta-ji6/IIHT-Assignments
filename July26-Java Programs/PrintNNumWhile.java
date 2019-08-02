package com.assignment.july26;
import java.util.Scanner;

public class PrintNNumWhile {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("Enter the number: ");
		Scanner sc = new Scanner(System.in);
		int n =  sc.nextInt();
		int i = 1;
		while(i<=n) {
			System.out.println((i++) + " ");
		}
	}

}
