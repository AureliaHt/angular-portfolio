import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

const homeRoutes: Routes = [
  { path: 'home', component: WelcomeComponent },
]

@NgModule({
  declarations: [
    WelcomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ]
})
export class HomeModule { }
