import { Component } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    EmployeeComponent,  // <app-employee>
    UserComponent,      // <app-user>
    AdminComponent      // <app-admin>
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // ...
}
