package com.assignment.july26;

public class SwapFxn {

	public static void swap (int x, int y) {
		int temp = x;
		x = y;
		y = temp;
		System.out.println("After Swapping: a = " + x + " and b = " + y);
	}
	public static void main(String[] args) {
			int a = 10;
			int b = 20;
			System.out.println("Before Swapping: a = " + a + " and b = " + b);
			swap(a,b);
		}

	}
