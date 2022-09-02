import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const homeRoutes: Routes = [
  { path: 'home', component: WelcomeComponent },
]

@NgModule({
  declarations: [
    WelcomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ]
})
export class HomeModule { }
