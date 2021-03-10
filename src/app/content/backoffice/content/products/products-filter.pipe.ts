import { Pipe, PipeTransform } from '@angular/core';
import {IProduct} from '../../../../store/reducers/products.reducer';

@Pipe({
  name: 'productsFilter',
  pure: false
})
export class ProductsFilterPipe implements PipeTransform {

  public transform(products: IProduct[], searchTerm: string = '', onlyFavourites: boolean = false): IProduct[] {
    let result: IProduct[] = products;
    if (onlyFavourites) {
      result = result.filter((product: IProduct) => {
        return product.isFavorite;
      });
    }
    if (!searchTerm) {
      return result;
    }
    console.log('recalc pipe');
    return result.filter((product: IProduct) => {
      return `${product.title} ${product.price}`.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }
}
