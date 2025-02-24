import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employee = {
    name: 'Jay deshmukh',
    position: 'Full stack developer',
    department: 'Development'
  };
}
