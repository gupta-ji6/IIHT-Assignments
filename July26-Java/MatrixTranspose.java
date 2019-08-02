package com.assignment.july26;
import java.util.Scanner;

public class MatrixTranspose {

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
		
		for(int i = 0;i<m;i++)
			for(int j = 0; j<n;j++)
				tarr[j][i] = arr[i][j];
		
		for(int i = 0;i<n;i++) {
			for(int j=0;j<m;j++) {
				System.out.print(tarr[i][j] + " ");
			}
			System.out.println(" ");
		}

	}

}
