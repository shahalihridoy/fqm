import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

// tslint:disable-next-line: no-input-rename
  @Input('sidenav') sidenav: MatSidenav;

  constructor() { }

  ngOnInit() {
  }

}
