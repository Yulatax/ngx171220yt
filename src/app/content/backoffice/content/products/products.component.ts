import {Component} from '@angular/core';
import {UnSubscriber} from '../../../../unsubscriber';
import {Observable} from 'rxjs';
import {IProduct, ProductsService} from './products.service';
import {MatCheckboxChange} from '@angular/material/checkbox';

@Component({
  selector: 'course-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends UnSubscriber {

  public onlyFavourites = false;

  public products$: Observable<IProduct[]> = this.productsService.getProducts();
  public searchTerm = '';

  constructor(
    // private cdr: ChangeDetectorRef
    private productsService: ProductsService
  ) {
    super();
  }

  public search(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
  }

  public searchByFavourites({checked}: MatCheckboxChange): void {
    this.onlyFavourites = checked;
  }


}
