import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employee = {
    name: 'John Doe',
    position: 'Software Developer',
    department: 'IT',
    joinDate: '2023-01-15'
  };
}