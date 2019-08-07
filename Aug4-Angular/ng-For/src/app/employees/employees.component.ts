import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {
  employees = [];
  constructor(private _employeeService: EmployeeService) { 
  }

  getEmployees(): void {
    this.employees.push({
        id: 805622,
        name: "Rajat Kumar (RK)",
        gender: "M",
        domain: "Java Full Stack"
    });
  }

  trackByEmpCode (index: number, employee: any):
  string {
    return employee.id;
  }

  ngOnInit() {
    this.employees = this._employeeService.showEmployees();
  }

}
