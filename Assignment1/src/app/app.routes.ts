import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  { path: '', component: EmployeeComponent },
  { path: 'user', component: UserComponent },
  { path: 'admin', component: AdminComponent },
];
