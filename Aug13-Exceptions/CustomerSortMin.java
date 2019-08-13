package com.assignment.aug13;

import java.util.ArrayList;

public class CustomerSortMin {

	public static void main(String[] args) {
		ArrayList<Customer> customers = new ArrayList<Customer>();
		customers.add(new Customer(101, "Ayush Gupta", 22));
		customers.add(new Customer(102, "Rajat Gupta", 23));
		customers.add(new Customer(103, "Sonal Gupta", 28));
		customers.add(new Customer(104, "Prawn Gupta", 20));
		
		for(Customer customer: customers) {
			System.out.println(customer.name);
		}
	}
	
}
