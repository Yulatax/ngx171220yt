import { Component, OnInit } from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// // import {Router} from '@angular/router';
// // import {tap} from 'rxjs/operators';

@Component({
  selector: 'course-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    // private readonly http: HttpClient,
    // private router: Router
  ) { }

  ngOnInit(): void {
  }

  public login(user: any): void {
    console.log(user);
    // this.http.post('/auth/signin', user)
    //   .pipe(
    //     tap((userFromServer: any) => {
    //       console.log(userFromServer);
    //       localStorage.setItem('accessToken', userFromServer.accessToken);
    //     })
    //   )
    //   .subscribe(() => {
    //     this.router.navigate(['/backoffice']);
    //     }
    //   );
  }
}
