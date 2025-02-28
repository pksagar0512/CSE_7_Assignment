import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employee = {
    id: 'EMP001',
    name: 'John Doe',
    position: 'Software Developer',
    department: 'IT',
    joinDate: '2024-01-15'
  };
}
