import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.None  // 👈 Add this line
})
export class AdminComponent {
  admin = {
    name: "Dinesh",
    email: "dineshkumarvadala1@gmail.com",
    role: "Developer",
    contact: "8639610615"
  };
}
