package com.assignment.aug13;
import java.util.ArrayList;

class Employee {
	public void displayEmp() {
		System.out.println("Employee Object");
	}
}

class Dog {
	public void displayDog() {
		System.out.println("Dog Object");
	}
}

public class ArrayListExample {

	public static void main(String[] args) {
		 ArrayList<Object> list = new ArrayList<Object>();
		 list.add(20);
		 list.add("Ayush");
		 list.add(23.78);
		 list.add(new Employee()); //Doesn't call displayEmp()
		 list.add(new Dog()); // this doesn't call displayDog()
		 System.out.println(list);
		 
	}

}
