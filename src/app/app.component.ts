import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vivah-website';
  showHeader = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {

        // HIDE HEADER on BOTH: /profile AND /my-profile
        const hideRoutes = ['/profile'];

        this.showHeader = !hideRoutes.some(route =>
          event.url.startsWith(route)
        );

      });
  }
}
