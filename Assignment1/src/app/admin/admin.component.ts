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
    totalUsers: 2000,
    activeUsers: 400,
    pendingApprovals: 50,
    lastBackup: '27-02-2025'
  };
}