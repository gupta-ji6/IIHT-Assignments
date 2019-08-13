package com.assignment.aug13;
import java.util.ArrayList;
import java.util.Iterator;
public class ArrayIterator {

	public static void main(String[] args) {
		 ArrayList<String> list = new ArrayList<String>();
		 list.add("John");
		 list.add("Cena");
		 list.add("Triple");
		 
		 Iterator<String> it = list.iterator();
		 while(it.hasNext()) {
			 String str = it.next();
			 System.out.println(str);
		 }
	}

}
