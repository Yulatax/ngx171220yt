import {mockedProducts$} from '../../products';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

export interface IProduct {
  _id: string;
  title: string;
  img: string;
  price: number;
  author: string;
  isFavorite: boolean;
}

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
