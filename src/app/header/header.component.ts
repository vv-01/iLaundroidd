import { Component, HostListener, OnInit } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  faBars = faBars;
  faTimes = faTimes;
  isOpen: boolean = false;
  isHidden: boolean = false;
  prevScrollPos: number = 0;
  isMenuOpen: boolean = false;
  navbarLinks = [
    { label: 'Home', href: '', ariaLabel: 'Home' },
    { label: 'Services', href: 'services', ariaLabel: 'Services' },
    { label: 'Instructions', href: 'instructions', ariaLabel: 'FAQ' },
    { label: 'Contact us', href: 'contact', ariaLabel: 'Contact' },
  ];
  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  handleScroll(event: Event) {
    const currentScrollPos = window.pageYOffset;
    this.isHidden =
      currentScrollPos > this.prevScrollPos && currentScrollPos > 0;
    this.prevScrollPos = currentScrollPos;

    // Close the mobile nav when scrolling
    if (this.isOpen) {
      this.isOpen = false;
    }
  }

  toggleMobileMenu() {
    this.isOpen = !this.isOpen;
  }

  // toggleMenu() {
  //   this.isMenuOpen = !this.isMenuOpen;
  // }
}
