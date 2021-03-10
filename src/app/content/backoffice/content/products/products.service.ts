import {mockedProducts$} from '../../../../products';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {IProduct} from '../../../../store/reducers/products.reducer';



@Injectable()
export class ProductsService {

  public constructor(
    // private http: HttpClient,
  ) {}

  public getProducts(): Observable<IProduct[]> {
    return mockedProducts$;
  }

  // public getProducts(): Observable<IProduct[]> {
  //   return this.http.get<IProduct[]>(`/products`)
  // }
}
