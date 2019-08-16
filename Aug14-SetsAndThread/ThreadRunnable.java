package com.assignment.aug14;

public class ThreadRunnable implements Runnable {
	public void run() {
		for (int i=0;i<10;i++) {
				try {
					Thread.sleep(1000);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
		}
		System.out.println("Hello, I'm written by thread - " + Thread.currentThread());
	}
}
