// import { Component } from '@angular/core';
import { Component, ViewChild, HostListener } from '@angular/core';
// import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  pageTitle: string = 'Page Title';
  title = 'Prototype Prodago01';

  // @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;  // Material
}
