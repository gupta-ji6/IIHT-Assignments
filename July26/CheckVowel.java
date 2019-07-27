package com.assignment.july26;
import java.util.*;
public class CheckVowel {

	public static void vowel(char c) {
		switch(c) {
			case 'a': case 'A': System.out.println(c + " is a vowel.");
					break;
			case 'e': case 'E': System.out.println(c + " is a vowel.");
					break;
			case 'i': case 'I': System.out.println(c + " is a vowel.");
					break;
			case 'o': case 'O': System.out.println(c + " is a vowel.");
					break;
			case 'u': case 'U': System.out.println(c + " is a vowel.");
					break;
			default: System.out.println(c + " is a consonant.");
	
		}
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		char c;
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the character: ");
		c = sc.next().charAt(0);
		vowel(c);
	}

}
