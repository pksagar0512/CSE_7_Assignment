import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterLink, RouterLinkActive, RouterOutlet], // Import RouterModule for routing
  template: `
    <div class="main-container">
      <header>
        <h1>Simple Angular Application</h1>
        <nav>
          <a routerLink="/home" routerLinkActive="active">Home</a>
          <a routerLink="/about" routerLinkActive="active">About</a>
          <a routerLink="/contact" routerLinkActive="active">Contact</a>
          <a routerLink="/login" routerLinkActive="active">LogIn</a>
        </nav>
      </header>
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment1';
}
