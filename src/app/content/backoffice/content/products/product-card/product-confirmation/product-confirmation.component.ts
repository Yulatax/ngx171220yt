import {Component, NgModule} from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import {IProduct} from '../../../../../../store/reducers/products.reducer';

@Component({
  selector: 'course-product-confirmation',
  templateUrl: './product-confirmation.component.html',
  styleUrls: ['./product-confirmation.component.scss']
})
export class ProductConfirmationComponent {

  public product!: IProduct;

  public save(): void {

  }

  public close(): void {

  }

}

@NgModule({
  declarations: [ProductConfirmationComponent],
  imports: [MatButtonModule, MatCardModule]
})
export class ProductConfirmationModule {

}
