package com.assignment.aug16;

public class InterThreadComm {
	
	int amount = 1000;
	
	synchronized void withdraw(int amount) {
		System.out.println("Inittiating withdraw.");
		
		if(this.amount < amount) {
			System.out.println("Your balance is low. Waiting for sufficient deposit before withdrawl.");
			
			try {
				wait();
			}
			
			catch(Exception e) {
				System.out.println(e);
			}
		}
		
		this.amount = amount;
		System.out.println("Withdrawl is completed.");
	}
	
	synchronized void deposit(int amount) {
		System.out.println("Initiating deposit...");
		this.amount += amount;
		System.out.println("Successfully deposited Rs." + amount);
		notify();
	}
}

class Test {
	public static void main(String args[]) {
		final InterThreadComm it = new InterThreadComm();
		new Thread() {
			public void run() {
				it.withdraw(1500);	
			}
		}.start();
		
		new Thread() {  
			public void run() {
				it.deposit(1000);
			}  
		}.start(); 
	}
}
