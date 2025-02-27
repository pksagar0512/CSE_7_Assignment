import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employee = {
    name: 'Mahesh',
    position: 'Software Engineer',
    department: 'IT',
    email: 'Mahesh143@gmail.com'
  };
}
