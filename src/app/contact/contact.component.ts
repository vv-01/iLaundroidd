import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  constructor(private router: Router) {}

  gotoPage(pagename: string): void {
    this.router.navigate([`${pagename}`]);
  }
}
