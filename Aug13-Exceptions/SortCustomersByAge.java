package com.assignment.aug13;

import java.util.Comparator;

public abstract class SortCustomersByAge implements Comparator {	
	
	public int compare(Customer c1, Customer c2) {
		return c1.getAge() - c2.getAge();
	}

}
