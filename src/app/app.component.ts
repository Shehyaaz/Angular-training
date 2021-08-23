import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .paragraphColor{
      color: white;
    }
  `]
})
export class AppComponent { 
  display = true;
  btnClicks = [];

  onButtonClick(){
    this.display = !this.display;
    this.btnClicks.push(this.btnClicks.length + 1);
  }
}
