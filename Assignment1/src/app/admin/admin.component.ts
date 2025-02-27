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
    totalUsers: 5250,
    activeUsers: 250,
    pendingApprovals: 5000,
    lastBackup: '03-01-2025'
  };
}