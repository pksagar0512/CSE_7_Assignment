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
    totalUsers: 1200,
    activeUsers: 500,
    pendingApprovals: 50,
    lastBackup: '03-01-2025'
  };
}