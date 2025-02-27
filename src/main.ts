import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { EmployeeComponent } from './app/employee/employee.component';
import { UserComponent } from './app/user/user.component';
import { AdminComponent } from './app/admin/admin.component';

bootstrapApplication(AppComponent, {
  providers: [],
}).catch(err => console.error(err));
