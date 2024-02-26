import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { HeroComponent } from './hero/hero.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home/aboutus',
    component: AboutusComponent,
  },
  {
    path: 'home/services',
    component: ServicesComponent,
  },
  {
    path: 'home/contact',
    component: ContactComponent,
  },
  {
    path: 'home',
    component: HeroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
