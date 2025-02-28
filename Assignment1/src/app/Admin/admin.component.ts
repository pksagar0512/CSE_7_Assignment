import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  adminStats = {
    totalUsers: 150,
    activeUsers: 87,
    pendingApprovals: 5,
    systemHealth: 'Good',
    lastBackup: '2024-03-14 23:00'
  };
}