import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
      const welcomeEffect:any = document.querySelectorAll('#welcomeEffect path');
      
      for(let i = 0 ; i < welcomeEffect.length ; i++ ) {
        console.log(`Letter ${i} is ${welcomeEffect[i].getTotalLength()}`);
      }
  }
}
