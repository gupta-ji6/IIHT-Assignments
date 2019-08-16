package com.assignment.aug14;

import java.util.TreeSet;
import com.assignment.aug13.SortCustomersByName;

public class TreeSetUserClass {

	public TreeSetUserClass() {
		super();
		
	}

	public static void main(String[] args) {
		TreeSet<Persons> persons = new TreeSet<Persons>(new SortCustomersByName());
		
	}

}
