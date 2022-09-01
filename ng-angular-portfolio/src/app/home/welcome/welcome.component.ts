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

      // element of the DOM used to move the indicator element on the navbar.
      const navbarElement = document.querySelectorAll('.navbarElement');
      const indicator = document.querySelector('.menuElement');

      // function to focus the indicator element
      function movingIndicator(event) {
        indicator
      }
  }
}
