import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user = {
    name: 'Jay deshmukh',
    age: 22,
    email: 'jaydeshmukh@gmail.com'
  };
}
