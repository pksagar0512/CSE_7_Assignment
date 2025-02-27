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
    username: 'sneh12',
    email: 'sneh@patel.com',
    role: 'Royal User',
    lastLogin: '15-7-2022'
  };
}