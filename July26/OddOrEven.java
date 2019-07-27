package com.assignment.july26;
import java.util.*;

public class OddOrEven {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int n;
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter your number: ");
		n = sc.nextInt();
		if(n%2 == 0)
			System.out.println(n + " is even");
		else
			System.out.println(n + " is odd");
	}

}
