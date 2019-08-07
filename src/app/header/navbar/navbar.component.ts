import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  footerToTab() {
    // Hack: Scrolls to top of Page after page view initialized
    let footer = document.getElementById('footer');
    if (footer !== null) {
      footer.scrollIntoView();
      footer = null;
    }
  }

  mainToTab() {
    let main = document.getElementById('main');
    if (main !== null) {
      main.scrollIntoView();
      main = null;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
