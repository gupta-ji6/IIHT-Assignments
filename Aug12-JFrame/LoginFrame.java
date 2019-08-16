package com.assignment.aug12;

import javax.swing.*;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class LoginFrame extends JFrame implements ActionListener {

	JLabel lblUsername, lblPassword;
	JTextField txtUsername, txtPassword;
	JButton btnSubmit, btnReset;
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		LoginFrame lf = new LoginFrame();
	}
	
	public LoginFrame() {
		setLayout(new GridLayout(3,2));
		
		lblUsername = new JLabel("Username");
		lblPassword = new JLabel("Password");
		
		txtUsername = new JTextField("");
		txtPassword = new JTextField("");
		
		btnSubmit = new JButton("Submit");
		btnReset = new JButton("Reset");
		btnSubmit.addActionListener(this);
		btnReset.addActionListener(this);
		
		add(lblUsername);
		add(txtUsername);
		add(lblPassword);
		add(txtPassword);
		add(btnSubmit);
		add(btnReset);
		
		setSize(200,200);
		setVisible(true);
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		// TODO Auto-generated method stub
		System.out.println("Action Command = "+ e.getActionCommand());
		String action = e.getActionCommand();
		
		if(action!=null && action.equalsIgnoreCase("Submit")) {
			
			String Username = txtUsername.getText();
			String Password = txtPassword.getText();
//			System.out.println(Username + " " + Password);
			
			if(Username.trim().equals("") && Password != null && Password.trim().equals("")) {
				JOptionPane.showMessageDialog(null, "Enter Username & Password");
			}
			else if (Username != null && Username.equals("Admin") && Password != null && Password.equals("admin123")) {
				System.out.println("User is an admin");
			}
		}
		
		else if(action != null && action.equalsIgnoreCase("Reset")) {
			txtUsername.setText("");
			txtPassword.setText("");
		}
	}

}
