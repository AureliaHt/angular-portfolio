import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { PresentationComponent } from './presentation/presentation.component';
import { RouterModule, Routes } from '@angular/router';

const homeRoutes: Routes = [
  { path: 'home', component: WelcomeComponent },
  { path: 'presentation', component: PresentationComponent }
]

@NgModule({
  declarations: [
    WelcomeComponent,
    PresentationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ]
})
export class HomeModule { }
