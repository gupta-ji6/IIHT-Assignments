package com.assignment.aug13;

import java.util.Comparator;

public abstract class SortCustomersByName implements Comparator {

	public int compare(Customer o1, Customer o2) {
		// TODO Auto-generated method stub
		return o1.getName() - o2.getName();
	}

}
