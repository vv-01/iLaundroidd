import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  constructor(private router: Router) {}

  gotoPage(pagename: string): void {
    if (pagename === 'twitter') {
      window.open('https://twitter.com/ILaundroid', '_blank');
    } else if (pagename === 'facebook') {
      window.open('https://www.facebook.com/iIlaundroid/', '_blank');
    } else if (pagename === 'instagram') {
      window.open('https://www.instagram.com/ilaundroid_mangalore/', '_blank');
    }
  }

  openEmailClient(): void {
    window.open('mailto:ilaundroidmangalore@gmail.com');
  }
}
