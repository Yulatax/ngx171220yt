import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {of} from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import {getProductsError, getProductsPending, getProductsSuccess} from '../actions/products.actions';
import {ProductsService} from '../../content/backoffice/content/products/products.service';
import {IProduct} from '../reducers/products.reducer';

@Injectable()
export class ProductsEffects {

  getProducts$ = createEffect(() => this.actions$.pipe(
    ofType(getProductsPending),
    mergeMap(() => this.productsService.getProducts()
      .pipe(
        map((products: IProduct[]) => getProductsSuccess({products})),
        catchError(() => of(getProductsError()))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}
}
