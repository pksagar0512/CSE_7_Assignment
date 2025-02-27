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
    name: 'Achal Gosai',
    position: 'Bullet Developer',
    department: 'Mechanical',
    joinDate: '15-04-2022'
  };
}