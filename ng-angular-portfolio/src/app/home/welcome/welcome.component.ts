import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
 ngOnInit(): void {
      // function for to draw the "Welcome" letters. Function based on the length of the letters paths.
      const welcomeEffect:any = document.querySelectorAll('#welcomeEffect path');
      
      for(let i = 0 ; i < welcomeEffect.length ; i++ ) {
        console.log(`Letter ${i} is ${welcomeEffect[i].getTotalLength()}`);
      }
  }
}
