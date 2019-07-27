package com.assignment.july26;
import java.util.Scanner;

public class DiagonalElements {

	public static void main(String[] args) {
		System.out.println("Enter the number of rows and columns of matrix respectively: ");
		Scanner sc = new Scanner(System.in);
		int m = sc.nextInt();
		int n = sc.nextInt();
		int[][] arr = new int[m][n];
		int tarr[][] = new int[n][m];
		
		System.out.println("Enter the elements of matrix: ");
		
		for(int i =0; i<m;i++)
			for(int j=0;j<n;j++)
				arr[i][j] = sc.nextInt();
		
		System.out.println("The diagonal elements of array are:");
		
		for(int i=0;i<m;i++)
			for(int j=0;j<n;j++) {
				if (i==j)
					System.out.println(arr[i][j] + " ");
			}
	}

}
