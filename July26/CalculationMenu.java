package com.assignment.july26;
import java.util.*;

public class CalculationMenu {

	public static void calculate(int x, int y, char c) {
		switch(c) {
			case '+': System.out.println("Addition of " + x + " and " + y + " is " +  (x+y));
					  break;
			case '-': System.out.println("Subtraction of " + x + " and " + y  +" is " +  (x-y));
			  		  break;
			case '*': System.out.println("Multiplication of " + x + " and " + y + " is " +  x*y);
					  break;
			case '/': System.out.println("Division of " + x + " and " + y + " is " +  x/y);
			  break;
			default: System.out.println("This operation is invalid");  
		}
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter two numbers: ");
		int a = sc.nextInt();
		int b = sc.nextInt();
		System.out.println("Enter the operation you want to perform");
		System.out.println("+ : Addition");
		System.out.println("- : Subtraction");
		System.out.println("* : Multiplication");
		System.out.println("/ : Division");
		char o = sc.next().charAt(0);
		calculate(a,b,o);
	}

}
