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
      <header>
        <h1>Trial App For Angular</h1>
      </header>
      <main>
      <app-admin></app-admin>
        <app-employee></app-employee>
        <app-user></app-user>
      </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment1';
}