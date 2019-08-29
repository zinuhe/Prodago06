import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  pageTitle: string = '-Header-';
  title = 'Header';

  // icon font awesome
  faUser = faUser;


  /* *** */
  // closeResult: string;

  constructor(private modalService: NgbModal) {}

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }
}
