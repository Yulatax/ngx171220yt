import {Component, ContentChild, EventEmitter, OnInit, Output, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'course-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  // @ContentChild('el', {static: true})
  // public el!: ElementRef;

  @ContentChild('contentTemplate', {static: true})
  public contentTempl!: TemplateRef<any>;

  @ViewChild('drawer', {static: true})
  public drawerInst!: MatDrawer;

  @ViewChild('container', {static: true, read: ViewContainerRef})
  public containerForContent!: ViewContainerRef;

  @Output()
  public setDrawer = new EventEmitter(true);

  constructor() { }

  ngOnInit(): void {
    this.containerForContent.createEmbeddedView(this.contentTempl);
    this.setDrawer.emit(this.drawerInst);
  }
}
