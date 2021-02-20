import {Component, OnInit} from '@angular/core';
import {UnSubscriber} from './unsubscriber';
import {NavigationStart, Router, Event} from '@angular/router';
import {filter, take} from 'rxjs/operators';

@Component({
  selector: 'course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends UnSubscriber implements OnInit{

  constructor(
    private readonly router: Router
  ) {
    super();
  }


  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(this.isNavigationStart),
        filter((e: NavigationStart) => {
          return e.id === 1;
        }),
        take(1)
      )
      .subscribe((e) => {
        console.log(e);
    });
  }

  private isNavigationStart(e: Event): e is NavigationStart {
    return e instanceof NavigationStart;
  }

}
