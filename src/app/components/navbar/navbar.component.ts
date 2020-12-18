import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthService, @Inject(DOCUMENT) public document: Document) {
    auth.user$.subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

}
