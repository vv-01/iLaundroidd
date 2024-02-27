import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css',
})
export class AboutusComponent {
  constructor(private router: Router) {}

  gotoPage(pagename: string): void {
    this.router.navigate([`${pagename}`]);
  }
}
