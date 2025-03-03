import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user = {
    username: 'kaval',
    email: 'rk.com',
    role: 'Premium User',
    lastLogin: '01-5-2024'
  };
}