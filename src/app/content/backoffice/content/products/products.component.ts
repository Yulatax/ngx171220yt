import {Component, OnInit} from '@angular/core';
import {UnSubscriber} from '../../../../unsubscriber';
import {Observable} from 'rxjs';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {IProduct} from '../../../../store/reducers/products.reducer';
import {Store} from '@ngrx/store';
import {IRootState} from '../../../../store';
import {getProductsPending} from '../../../../store/actions/products.actions';

@Component({
  selector: 'course-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends UnSubscriber implements OnInit{

  public onlyFavourites = false;

  // public products$: Observable<IProduct[]> = this.productsService.getProducts();
  public products$: Observable<IProduct[]> = this.store.select('products', 'items');
  public isLoading$: Observable<boolean> = this.store.select('products', 'isLoading');
  public searchTerm = '';

  constructor(
    // private cdr: ChangeDetectorRef
    private readonly store: Store<IRootState>
  ) {
    super();
  }

  public ngOnInit(): void {
    this.store.dispatch(getProductsPending());
  }

  public search(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
  }

  public searchByFavourites({checked}: MatCheckboxChange): void {
    this.onlyFavourites = checked;
  }


}
