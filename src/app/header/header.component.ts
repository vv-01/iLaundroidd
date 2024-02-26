import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  // private navbarToggle: HTMLElement | null;
  // private isNavbarExpanded: boolean;

  // constructor(navbar: HTMLElement) {
  //   this.navbarToggle = navbar.querySelector('#navbar-toggle');
  //   this.isNavbarExpanded =
  //     this.navbarToggle?.getAttribute('aria-expanded') === 'true';

  //   this.navbarToggle?.addEventListener(
  //     'click',
  //     this.toggleNavbarVisibility.bind(this)
  //   );
  // }

  // private toggleNavbarVisibility() {
  //   this.isNavbarExpanded = !this.isNavbarExpanded;
  //   this.navbarToggle?.setAttribute(
  //     'aria-expanded',
  //     String(this.isNavbarExpanded)
  //   );
  // }
}


