import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, EmployeeComponent, UserComponent, AdminComponent],
  template: `
    <div class="main-container">
      <header>
        <h1>Angular Components Demo</h1>
      </header>
      <main>
        <app-employee></app-employee>
        <app-user></app-user>
        <app-admin></app-admin>
      </main>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment1';
}