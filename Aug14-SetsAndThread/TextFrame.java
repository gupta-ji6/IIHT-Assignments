package com.assignment.aug14;

import java.awt.Graphics;

import javax.swing.JFrame;
import javax.swing.JPanel;

public class TextFrame extends JPanel implements Runnable {

	int x1=0,y1=200,x2=350,y2=200;
	Thread th1,th2;
	boolean th1Change = false, th2Change = false;
	
	public static void main(String[] args) {
		JFrame frame = new JFrame("Text");
		 frame.getContentPane().add(new TextFrame());
		 frame.setSize(400,400);
		 frame.setVisible(true);
	}
	
	public TextFrame() {
		th1 = new Thread(this);
		th2 = new Thread(this);
		
		th1.setName("Thread-1");
		th2.setName("Thread-2");
		
		th1.start();
		th2.start();
	}
	
	public void paint(Graphics g) {
		super.paint(g);
		g.drawString("Balle", x1, y1);
		g.drawString("Balle", x2, y2);
//		x1 += 10;
//		x2 -= 10;
	}

	@Override
	public void run() {
		while(true) {
			try {
				Thread thread = Thread.currentThread();
				if(thread == th1) {
					if(!th1Change) {
						x1 += 10;
						y1 += 10;
						if(x1 > 350 || y1 > 350) {
							th1Change = true;
						}
					}
					else {
						x1 -= 10;
						y1 -= 10;
						if(x1<50 || y1 <50) {
							th1Change = false;
						}
					}
						
				}
				else if(thread == th2) {
					if(!th1Change) {
						x2 -= 10;
						y2 -= 10;
						if(x2 < 350 || y2 < 350) {
							th2Change = true;
						}
					}
					else {
						x2 += 10;
						y2 += 10;
						if(x2<50 || y2 <50) {
							th2Change = false;
						}
					}
				}
				Thread.sleep(100);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			repaint();
		}
	}
}
