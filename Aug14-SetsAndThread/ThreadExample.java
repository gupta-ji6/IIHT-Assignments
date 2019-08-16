package com.assignment.aug14;

public class ThreadExample {

	public static void main(String[] args) {
		
		Thread t1 = new Thread(new ThreadRunnable());
		Thread t2 = new Thread(new ThreadRunnable());
		Thread t3 = new Thread(new ThreadRunnable());
		Thread t4 = new Thread(new ThreadRunnable());
		
		t1.setName("Red");
		t2.setName("Yellow");
		t3.setName("Blue");
		t4.setName("Black");
		
		t1.start();
		t2.start();
		t3.start();
		t4.start();
	}

}
