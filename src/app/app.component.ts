import { Component } from '@angular/core';

@Component({
  selector: 'app-module',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public countpop = 0;
  public countpush = 0;
  countvote(value)
  {
    if(value) this.countpop++;
    else this.countpush--;
  }
}






