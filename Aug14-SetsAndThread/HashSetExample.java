package com.assignment.aug14;

import java.util.HashSet;

public class HashSetExample {

	public static void main(String[] args) {
		 HashSet<String> list = new HashSet<String>();
		 list.add("Gupta");
		 list.add("Ayush");
		 list.add("Ayush");
		 list.add("Ayushi");
		 list.add("Ayushg");
		 list.add("Ayushu");
		 System.out.println(list + "" + list.size());
	}

}
