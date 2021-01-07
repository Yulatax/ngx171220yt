import {Component} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'ngx171220yt';
  public drawer!: MatDrawer;

  // private salary = 3000;

  public imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg';
  // public imgWidth = 10;
  //
  // public content = '<span>My content</span>';
  //
  // public user = {
  //   name: 'Yulia'
  // };
  //
  // public getSalary(): number {
  //   return Math.round(this.salary * 1.2);
  // }
  //
  // public search(event: Event, el: HTMLElement): void {
  //   const value = (event.target as HTMLInputElement).value;
  //   console.log('search', el, value);
  // }

  constructor(
    // private cdr: ChangeDetectorRef
  ) {}

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
}
