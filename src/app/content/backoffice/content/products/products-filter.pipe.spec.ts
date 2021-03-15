import {IProduct} from '../../../../store/reducers/products.reducer';
import {ProductsFilterPipe} from './products-filter.pipe';

export const products: IProduct[] = [
  {
    _id: '5ff3495c317f99541403e0fe',
    title: 'Product 111',
    img: 'assets/img/product-4.jpg',
    price: 2345,
    author: 'Igor',
    isFavorite: false
  },
  {
    _id: '5ff3495c317f99541403e0ff',
    title: 'Product 2345',
    img: 'assets/img/product-2.jpg',
    price: 221,
    author: 'Vlad',
    isFavorite: false
  },
  {
    _id: '5ff3495c317f99541403e100',
    title: 'Product 41',
    img: 'assets/img/product-6.jpg',
    price: 2344,
    author: 'Lena',
    isFavorite: true
  }
];

describe('Products Filter Pipe', () => {
  let productsFilterPipe: ProductsFilterPipe;

  beforeEach(() => {
    productsFilterPipe = new ProductsFilterPipe();
  });

  it('should transform right', () => {
    expect(productsFilterPipe.transform(products, '')).toEqual(products);
    expect(productsFilterPipe.transform(products, '234')).toEqual(products);
    const [, , ...result] = products;
    expect(productsFilterPipe.transform(products, '41')).toEqual(result);
    expect(productsFilterPipe.transform(products, '234', true)).toEqual(result);
  });
});
