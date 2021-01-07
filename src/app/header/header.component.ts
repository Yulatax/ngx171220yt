import {Component, Input, OnInit} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'course-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  public titleText = '';

  @Input()
  public sideNavDrawer!: MatDrawer;

  constructor() { }

  ngOnInit(): void {
  }
}
