import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SignInComponent } from './sign-in/sign-in.component';

export const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'admin', component: AdminComponent },

  { path:'home',
    component: HomeComponent
  },
  {path: 'about',
    component:AboutComponent
  },
  {path:'contact',
    component:ContactComponent
  },
  { path:'signin',
    component: SignInComponent

  }
];
