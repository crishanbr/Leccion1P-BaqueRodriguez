import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showHeader: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      this.showHeader = this.router.url !== '/login';
    });
  }
}
