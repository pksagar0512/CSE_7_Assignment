import { Component } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, RouterLink, RouterLinkActive
 ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // ...
}
