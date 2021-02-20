import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'course-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @ViewChild('drawer', {static: true})
  public drawerInst!: MatDrawer;

  @Output()
  public setDrawer = new EventEmitter(true);

  constructor() { }

  ngOnInit(): void {
    this.setDrawer.emit(this.drawerInst);
  }
}
