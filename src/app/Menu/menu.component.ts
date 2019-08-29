import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  // styleUrls: ['./menu.component.css', '../app.component.scss', '../../styles.scss']
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent {
  pageTitle: string = '-menu-';
  title = 'menu';
}
