package com.assignment.july26;
import java.util.*;

public class DateValidation {

	public static void validateDate(int d, int m, int y) {
		int days;
		
		if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12)
			days = 31;
		else if (m==2) {
			if(y%4 == 0 || y%400 == 0)
				days = 29;
			else
				days = 28;
		}
		else
			days = 30;
		
		if(d<=days)
			System.out.println("The date " + d + "-" + m + "-" + y + "is valid." );
		else
			System.out.println("The date " + d + "-" + m + "-" + y + "is invalid." );
		
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int d,m,y;
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter date of the month: ");
		d = sc.nextInt();
		System.out.println("Enter month: ");
		m = sc.nextInt();
		System.out.println("Enter year: ");
		y = sc.nextInt();
		if(d>0 && d<=31 && m>0 && m<13)
			validateDate(d,m,y);
		else
			System.out.println("The date " + d + "-" + m + "-" + y + "is invalid." );
			
	}

}
