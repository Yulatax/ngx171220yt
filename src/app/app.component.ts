import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';
import {IProduct, mockedProducts$} from './products';
import {Observable} from 'rxjs';
import {UnSubscriber} from './unsubscriber';

@Component({
  selector: 'course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends UnSubscriber implements OnInit, OnDestroy{
  public title = 'ngx171220yt';
  public drawer!: MatDrawer;

  // public products!: IProduct[];
  public products$: Observable<IProduct[]> = mockedProducts$;
  public searchTerm = '';

  public imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg';

  constructor(
    // private cdr: ChangeDetectorRef
  ) {
    super();
  }

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
  }

  public ngOnDestroy(): void {
    // ... do smth
    super.ngOnDestroy();
  }

  public toggleSideNav(event: any): void {
    console.log(event);
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

  public search(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
  }
}
