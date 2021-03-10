import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {mockedProducts} from '../../../../products';
import {IProduct} from '../../../../store/reducers/products.reducer';

@Injectable()
export class OneProductResolverService implements Resolve<IProduct | null>{

  constructor(
    // private readonly http: HttpClient,
    private readonly router: Router
  ) {}

  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct | null> {
  //   console.log(route, state);
  //   const id = route.paramMap.get('productId');
  //   return this.http.get<IProduct | null>(`/products/${id}`)
  //     .pipe(
  //       map((product: IProduct | null) => {
  //         if (!product) {
  //           this.router.navigate(['/backoffice']);
  //         }
  //         return product;
  //       }),
  //       catchError(() => {
  //         this.router.navigate(['/backoffice']);
  //         return of(null);
  //       })
  //     );
  // }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct | null> {
    console.log(route, state);
    const id = route.paramMap.get('productId');
    const product = mockedProducts.filter((p: IProduct) => {
      return p._id === id;
    });
    return of(product[0])
      .pipe(
        map((p) => {
          if (!p) {
            this.router.navigate(['/backoffice']);
          }
          return p;
        }),
        catchError(() => {
          this.router.navigate(['/backoffice']);
          return of(null);
        })
      );
  }
}
