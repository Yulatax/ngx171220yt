import {Component, OnInit} from '@angular/core';
import {UnSubscriber} from './unsubscriber';

@Component({
  selector: 'course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends UnSubscriber implements OnInit{

  constructor() {
    super();
  }


  ngOnInit(): void {
  }
}
