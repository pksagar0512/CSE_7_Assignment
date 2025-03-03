import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component'; // ✅ Import HomeComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],  // ✅ Correct Import of Standalone Component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Component Example';
}