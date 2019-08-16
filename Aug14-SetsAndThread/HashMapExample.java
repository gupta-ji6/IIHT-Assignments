package com.assignment.aug14;

import java.util.HashMap;
import java.util.Iterator;

public class HashMapExample {

	public static void main(String[] args) {
		 HashMap<String, Object> maps = new HashMap<>();
		 maps.put("fName", "Ayush");
		 maps.put("lName", "Gupta");
		 maps.put("age", 22);
		 System.out.println(maps);
		 
		 HashMap<String, Object> maps2 = new HashMap<>();
		 maps2.putAll(maps);
		 System.out.println(maps2);
		 
		 String fName = (String) maps.get("fName");
		 System.out.println("First Name: " + fName);
		 
		 boolean hasKey = maps.containsKey("mind");
		 System.out.println("Does Ayush have brain? " + hasKey);
		  
		  
		 //prefer not to use in production
		 
		 boolean hasValue = maps.containsValue("Ayush");
		 System.out.println("Does map contain Ayush?" + hasValue);
		 
		 Iterator iterator = maps.keySet().iterator();
		 while(iterator.hasNext()){
		   Object key   = iterator.next();
		   Object value = maps.get(key);
		   System.out.println("Key: " + key + "Value: " + value);
		 }
		 
		 for(Object key : maps.keySet()) {
			    Object value = maps.get(key);
			    System.out.println("Value: " +  value);
			}
	}

}
