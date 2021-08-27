import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  oddNum: number[] = [];
  evenNum: number[] = [];

  onIntervalFired(firedNum: number) {
    if(firedNum & 1){
      this.oddNum.push(firedNum);
    } else {
      this.evenNum.push(firedNum);
    }
  }

}
