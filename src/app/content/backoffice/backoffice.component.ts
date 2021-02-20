import {Component, OnInit} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'course-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss']
})
export class BackofficeComponent implements OnInit {

  public title = 'ngx171220yt';
  public drawer!: MatDrawer;

  public imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg';

  public ngOnInit(): void {
    // const sub = mockedProducts$.subscribe((v) => {
    //   this.products = v;
    // });
    //
    // this.subscriptions.push(sub);

    // mockedProducts$
    // .pipe(
    //   takeUntil(this.unSubscriber$$)
    // )
    // .subscribe((v) => {
    //   this.products = v;
    // });

    // const sequence$$ = new Subject();
    //
    // sequence$$.subscribe((v) => {
    //   console.log(`From subject:`, v);
    // });
    //
    // setTimeout(() => {
    //   const obj = {title: 'RxJS awesome'};
    //   console.log(`EMIT event`, obj);
    //   sequence$$.next(obj);
    // }, 5000);
    //
    // setTimeout(() => {
    //   const obj = {title: 'Angular awesome'};
    //   console.log(`EMIT event`, obj);
    //   sequence$$.next(obj);
    // }, 10000);
  }

  public setSideNav(drawer: MatDrawer): void {
    // setTimeout(() => {
    //   this.drawer = drawer;
    // });
    // Promise.resolve().then(() => {
    //     //   this.drawer = drawer;
    //     // });
    this.drawer = drawer;
    // this.cdr.detectChanges();
  }
}
