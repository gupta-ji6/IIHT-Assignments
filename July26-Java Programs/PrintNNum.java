package com.assignment.july26;
import java.util.Scanner;

public class PrintNNum {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("Enter the number: ");
		Scanner sc = new Scanner(System.in);
		int n =  sc.nextInt();
		for(int i=1; i<=n; i++)
			System.out.print(i + " ");
	}

}
