import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HiddenDirective} from '../../../header/exchange-rates/hidden.directive';
import {MatIconModule} from '@angular/material/icon';
import {OneProductInCartComponent} from './one-product-in-cart.component';
import {ICartProduct} from '../../../../../store/reducers/cart.reducer';
import {By} from '@angular/platform-browser';

const product: ICartProduct = {
  _id: '5ff3495c317f99541403e0fe',
  title: 'Product 111',
  img: 'assets/img/product-4.jpg',
  price: 2345,
  author: 'Igor',
  isFavorite: false,
  count: 1
};

describe('Cart Product Component', () => {

  let fixture: ComponentFixture<OneProductInCartComponent>;
  let component: OneProductInCartComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneProductInCartComponent, HiddenDirective],
      imports: [MatIconModule]
    });
    fixture = TestBed.createComponent(OneProductInCartComponent);
    component = fixture.componentInstance;
    component.product = product;
    fixture.detectChanges();

    spyOn(component.increment, 'emit')
      .and
      .callThrough();

    spyOn(component.decrement, 'emit')
      .and
      .callThrough();

    spyOn(component.remove, 'emit')
      .and
      .callThrough();

    spyOn(component, 'incrementProduct')
      .and
      .callThrough();

    spyOn(component, 'decrementProduct')
      .and
      .callThrough();

    spyOn(component, 'removeProduct')
      .and
      .callThrough();
  });


  it('should decrement', () => {
    const el = fixture.debugElement.query(By.css('.decrement'));
    el.triggerEventHandler('click', {});
    expect(component.increment.emit).not.toHaveBeenCalled();
    expect(component.decrementProduct).toHaveBeenCalledTimes(1);
    expect(component.decrement.emit).not.toHaveBeenCalled();
    expect(component.remove.emit).toHaveBeenCalledOnceWith({id: product._id});
  });

  it('should decrement with count > 1', () => {
    component.product = {...component.product, count: 2};
    const el = fixture.debugElement.query(By.css('.decrement'));
    el.triggerEventHandler('click', {});
    expect(component.increment.emit).not.toHaveBeenCalled();
    expect(component.decrementProduct).toHaveBeenCalledTimes(1);
    expect(component.remove.emit).not.toHaveBeenCalled();
    expect(component.decrement.emit).toHaveBeenCalledOnceWith({id: product._id, count: 1});
  });
});
