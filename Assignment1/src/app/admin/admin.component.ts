import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  adminStats = {
    totalUsers: 150,
    activeUsers: 89,
    pendingApprovals: 5,
    lastBackup: '2024-03-14'
  };
}