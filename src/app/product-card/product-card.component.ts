import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from '../shared/services/products.service';
import {ModalService} from '../modal/modal.service';


@Component({
  selector: 'course-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input()
  public product!: IProduct;

  @Input()
  public isOdd!: boolean;

  public constructor(
    private modalService: ModalService
  ) {}

  public ngOnInit(): void {
  }

  public async addToCart(): Promise<any> {
    const m = await import('./product-confirmation/product-confirmation.component');
    this.modalService.open({
      component: m.ProductConfirmationComponent,
      context: {
        product: {...this.product},
        save: () => {
          console.log('Move product to cart');
          this.modalService.close();
        },
        close: () => {
          this.modalService.close();
        }
      }
    });
  }
}
