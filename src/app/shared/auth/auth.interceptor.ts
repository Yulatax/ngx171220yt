import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Inject, Injectable} from '@angular/core';
import {BASE_URL} from '../../config';
import {filter, map} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  public constructor(
    @Inject(BASE_URL) private baseUrl: string
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers: HttpHeaders = req.headers
      .append('Authorization', 'fhgfgfgfgf')
      .append('Content-Type', 'application/json');

    const jsonRequest = req.clone({
      url: `${this.baseUrl}${req.url}`,
      headers
    });

    return next.handle(jsonRequest)
      .pipe(
        filter(this.isHttpResponse),
        map((responseEvent: HttpResponse<any>) => {
          const bodyWithoutData = responseEvent.body && responseEvent.body.data;
          return responseEvent.clone({body: bodyWithoutData});
        })
      );
  }

  private isHttpResponse(event: HttpEvent<any>): event is HttpResponse<any> {
    return event instanceof HttpResponse;
  }
}
