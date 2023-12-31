import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'databinding-exercise';
  username = '';

  updateUsername(event: any) {
    this.username = (<HTMLInputElement>event.target).value;
  }

  resetUsername() {
    this.username = '';
  }
}
