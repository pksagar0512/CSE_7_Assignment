import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgFor],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user = {
    username: 'johndoe',
    email: 'user&#64;example.com',
    role: 'Standard User',
    lastLogin: '2024-03-15',
    preferences: ['Dark Mode', 'Email Notifications']
  };
}
