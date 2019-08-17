package com.customer.ui;

import javax.swing.*;

import com.customer.dao.CustomerDAO;
import com.customer.dao.CustomerDAOImpl;
import com.customer.model.Customer;

import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class LoginFrame extends JFrame implements ActionListener {

	JLabel lblUsername, lblPassword;
	JTextField txtUsername, txtPassword;
	JButton btnSubmit, btnReset;
	
	public static void main(String[] args) {
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
		System.out.println("Action Command = "+ e.getActionCommand());
		String action = e.getActionCommand();
		
		if(action!=null && action.equalsIgnoreCase("Submit")) {
			
			String Username = txtUsername.getText();
			String Password = txtPassword.getText();
			
			if(Username.trim().equals("") && Password != null && Password.trim().equals("")) {
				JOptionPane.showMessageDialog(null, "Enter Username & Password");
			}
			else {
				
				CustomerDAO dao = new CustomerDAOImpl();
				Customer customer = dao.login(Username, Password);
				if(customer != null) {
					JOptionPane.showMessageDialog(null, "Login is successfull");
				}
				else {
					JOptionPane.showMessageDialog(null, "Enter correct username and password");
				}
			}
		}
		
		else if(action != null && action.equalsIgnoreCase("Reset")) {
			txtUsername.setText("");
			txtPassword.setText("");
		}
	}

}
