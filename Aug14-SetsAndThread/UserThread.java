package com.assignment.aug14;

public class UserThread extends Thread {
	public void run() {
		for (int i=0;i<10;i++) {
				try {
					Thread.sleep(200);
					System.out.println("Hello, I'm written by thread - " + Thread.currentThread());
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
		}
	}
}