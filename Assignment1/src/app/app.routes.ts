import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },{
        path: 'about',
        component: AboutComponent,
    },{
        path: 'contact',
        component: ContactComponent,
        },{
            path: 'signin',
            component: SigninComponent,

    }
];
