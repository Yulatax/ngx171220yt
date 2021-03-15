import {inject, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {BASE_URL} from '../../config';
import {environment} from '../../../environments/environment';
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {AuthInterceptor} from './auth.interceptor';
import {IProduct} from '../../store/reducers/products.reducer';

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
    isFavorite: false
  },
  {
    _id: '5ff3495c317f99541403e101',
    title: 'Product 31',
    img: 'assets/img/product-7.jpg',
    price: 334,
    author: 'Lena',
    isFavorite: false
  },
  {
    _id: '5ff3495c317f99541403e102',
    title: 'Product 11',
    img: 'assets/img/product-8.jpg',
    price: 22,
    author: 'Igor',
    isFavorite: false
  },
  {
    _id: '5ff3495c317f99541403e103',
    title: 'Product 231',
    img: 'assets/img/product-5.jpg',
    price: 23,
    author: 'Vlad',
    isFavorite: true
  },
  {
    _id: '5ff3495c317f99541403e104',
    title: 'Product 122',
    img: 'assets/img/product-9.jpg',
    price: 1200,
    author: 'Max',
    isFavorite: true
  },
  {
    _id: '5ff3495c317f99541403e105',
    title: 'Product 234',
    img: 'assets/img/product-3.jpg',
    price: 333,
    author: 'Igor',
    isFavorite: true
  },
  {
    _id: '5ff3495c317f99541403e106',
    title: 'Product 1',
    img: 'assets/img/product-1.jpg',
    price: 200,
    author: 'Igor',
    isFavorite: true
  }
];

describe('Auth interceptor', () => {

  let httpMocked: HttpTestingController;
  const access = 'fhgfgfgfgf';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: BASE_URL,
          useValue: environment.baseUrl
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
        }
      ]
    });

    httpMocked = TestBed.inject(HttpTestingController);
  });

  it('should have accessToken', inject([HttpClient, BASE_URL],
    (httpClient: HttpClient, baseUrl: string) => {
        httpClient.get('/products')
          .subscribe();

        const httpObj = httpMocked.expectOne({
          url: `${baseUrl}/products`,
          method: 'GET'
        });

        expect(httpObj.request.headers.has('Authorization')).toBeTruthy();
        expect(httpObj.request.headers.get('Authorization')).toEqual(access);
  }));

  it('should return products', inject([HttpClient, BASE_URL],
    (httpClient: HttpClient, baseUrl: string) => {
      httpClient.get('/products')
        .subscribe((productsFromResponse: any) => {
          expect(products).toEqual(productsFromResponse);
        });

      const httpObj = httpMocked.expectOne({
        url: `${baseUrl}/products`,
        method: 'GET'
      });

      httpObj.flush({data: products});
    }));
});
