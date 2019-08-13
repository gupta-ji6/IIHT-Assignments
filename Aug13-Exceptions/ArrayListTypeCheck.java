package com.assignment.aug13;
import java.util.ArrayList;
import java.util.Collections;

public class ArrayListTypeCheck {

	public static void main(String[] args) {
		 ArrayList<Object> list = new ArrayList<Object>();
		 list.add(20);
		 list.add("Ayush");
		 list.add(23.78);
		 list.add(new Employee11()); 
		 list.add(new Honey());
//		 Collections.sort(list);;
		 for (int i=0; i<list.size(); i++) {
			 Object obj = list.get(i);
			 
			 if(obj instanceof Employee11) {
				 Employee11 emp = (Employee11)obj;
				 emp.displayEmp();
			 }
			 else if(obj instanceof Honey) {
				 Honey d = (Honey)obj;
				 d.displayDog();
			 }
			 else {
				 System.out.println(obj);
			 }
		 }
		 
	}

}

class Honey {
	public void displayDog() {
		System.out.println("Dog Object");
	}
}

class Employee11 {
	public void displayEmp() {
		System.out.println("Employee Object");
	}
}

