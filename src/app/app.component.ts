import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wlive-admin';
  url = '';

  constructor(private router: Router) {
    console.log(router.routerState.snapshot.url);
  }

  ngOnInit() {
    this.url = this.router.url
  }

}
