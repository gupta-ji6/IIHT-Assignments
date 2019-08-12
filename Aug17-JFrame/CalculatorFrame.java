package com.assignment.aug12;

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class CalculatorFrame extends JFrame implements ActionListener {
	
	JLabel lblOperand1, lblOperand2, lblResult, lblInfo;
	JTextField txtOperand1, txtOperand2, txtResult;
	JButton btnAdd, btnSub, btnMul, btnDiv, btnReset;
	JPanel northPanel, centerPanel, southPanel;
	
	public CalculatorFrame() {
		
		setLayout(new BorderLayout());
		
		northPanel = new JPanel();
		centerPanel = new JPanel();
		southPanel = new JPanel();
		
		northPanel.setLayout(new GridLayout(3,2));
		
		lblOperand1 = new JLabel("First Operand");
		txtOperand1 = new JTextField("");
		lblOperand2 = new JLabel("Second Operand");
		txtOperand2 = new JTextField("");
		lblResult = new JLabel("Result");
		txtResult = new JTextField();
		
		northPanel.add(lblOperand1);
		northPanel.add(txtOperand1);
		northPanel.add(lblOperand2);
		northPanel.add(txtOperand2);
		northPanel.add(lblResult);
		northPanel.add(txtResult);
		
		centerPanel.setLayout(new FlowLayout());
		centerPanel.setSize(400, 100);
	
		btnAdd = new JButton("+");
		btnSub = new JButton("-");
		btnMul = new JButton("*");
		btnDiv = new JButton("/");
		btnReset = new JButton("C");
		
		btnAdd.addActionListener(this);
		btnSub.addActionListener(this);
		btnMul.addActionListener(this);
		btnDiv.addActionListener(this);
		btnReset.addActionListener(this);
		
		centerPanel.add(btnAdd);
		centerPanel.add(btnSub);
		centerPanel.add(btnMul);
		centerPanel.add(btnDiv);
		centerPanel.add(btnReset);
		
		southPanel.setLayout(new FlowLayout());
		
		lblInfo = new JLabel("Casio fx-82ms 2019.90.8");
		
		southPanel.add(lblInfo);
		
		add(northPanel, BorderLayout.NORTH);
		add(centerPanel, BorderLayout.CENTER);
		add(southPanel, BorderLayout.SOUTH);
		
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); 
		
		setSize(400,200);
		setVisible(true);
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		
		String operation = e.getActionCommand();
		
		if(txtOperand1 != null && txtOperand2 != null) {
			if(operation.equals("+")) {
				int op1 = Integer.parseInt(txtOperand1.getText());
				int op2 = Integer.parseInt(txtOperand2.getText());
				int sum = op1 + op2;
				String r = Integer.toString(sum);
				txtResult.setText(r);
			}
			else if(operation.equals("-")) {
				int op1 = Integer.parseInt(txtOperand1.getText());
				int op2 = Integer.parseInt(txtOperand2.getText());
				int sub = op1 - op2;
				String r = Integer.toString(sub);
				txtResult.setText(r);
			}
			else if(operation.equals("*")) {
				int op1 = Integer.parseInt(txtOperand1.getText());
				int op2 = Integer.parseInt(txtOperand2.getText());
				int mul = op1 * op2;
				String r = Integer.toString(mul);
				txtResult.setText(r);
			}
			else if(operation.equals("/")) {
				int op1 = Integer.parseInt(txtOperand1.getText());
				int op2 = Integer.parseInt(txtOperand2.getText());
				int div = op1 / op2;
				String r = Integer.toString(div);
				txtResult.setText(r);
			}
			else if(operation.equals("C")) {
				txtOperand1.setText("");
				txtOperand2.setText("");
				txtResult.setText("");
			}
//			else {
//				JOptionPane.showMessageDialog(null, "Select an operation to perform.");
//			}
		}
		else if(txtOperand1 != null || txtOperand2 != null) {
			if(operation.equals("+") || operation.equals("-") || operation.equals("*") || operation.equals("/")) {
				JOptionPane.showMessageDialog(null, "Enter the value of operands.");
			}
		}
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		CalculatorFrame cal =  new CalculatorFrame();
	}
}
