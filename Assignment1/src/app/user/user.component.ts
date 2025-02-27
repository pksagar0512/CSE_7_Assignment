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
    username: 'Dev001',
    email: 'dev@test.com',
    role: 'Premium User',
    lastLogin: '6-9-2024'
  };
}