package com.assignment.july26;
import java.util.Scanner;

public class RevElements {

	public static int reverse(int n) {
		int rev = 0, r;
		while(n>0) {
			r = n%10;
			rev = rev*10 + r;
			n = n/10;
		}
		return rev;
	}
	
	public static void main(String[] args) {
		System.out.println("Enter length of array: ");
		Scanner sc = new Scanner(System.in);
		int len = sc.nextInt();
		int[] arr = new int[len];
		for(int i=0;i<len;i++) {
			System.out.println("Enter " + (i+1) + " element of array: ");
			arr[i] = sc.nextInt();
		}
		
		for(int i=0;i<len;i++)
			arr[i] = reverse(arr[i]);
		
		for(int i=0;i<len;i++)
			System.out.println(arr[i] + "");

	}

}
