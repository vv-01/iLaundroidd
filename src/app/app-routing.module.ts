import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { HeroComponent } from './hero/hero.component';
import { InstructionsComponent } from './instructions/instructions.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full',
  // },
  {
    path: 'instructions',
    component: InstructionsComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '',
    component: HeroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
