import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminComponent } from "./admin/admin.component";
import { EmployeeComponent } from "./employee/employee.component";
import { UserComponent } from "./user/user.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AdminComponent, EmployeeComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment1';
}
