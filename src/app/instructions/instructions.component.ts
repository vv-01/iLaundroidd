import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrl: './instructions.component.css',
})
export class InstructionsComponent {
  constructor(private router: Router) {}

  gotoPage(pagename: string): void {
    this.router.navigate([`${pagename}`]);
  }
}
