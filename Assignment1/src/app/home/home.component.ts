import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule
import { EmployeeComponent } from '../employee/employee.component';
import { UserComponent } from '../user/user.component';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, EmployeeComponent, UserComponent, AdminComponent], // ✅ Import Standalone Components Here
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedComponent: string = ''; // ✅ Default: No component selected

  showComponent(component: string) {
    this.selectedComponent = component;
  }
}
