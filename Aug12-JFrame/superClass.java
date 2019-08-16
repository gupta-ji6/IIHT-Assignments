package com.assignment.aug12;

public class superClass {
	public void display() {
		System.out.println("I'm super class");
	}
} 

public class outerClass {
	
	public void display() {
		System.out.println("I'm outer class");
	}
	
	public class innerClass {
		public void display() {
			outerClass.this.display();
			System.out.println("I'm inner class");
		}
	}

}
