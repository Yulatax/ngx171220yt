import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'course-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.scss']
})
export class OneProductComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    // private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      // .pipe(
      //   switchMap((paramMap) => {
      //     const productId = paramMap.get('productId');
      //     return this.http.get(`/products/${productId}`);
      //   })
      // )
      .subscribe((paramMap) => {
        console.log(paramMap.get('productId'));
      });
  }

}
