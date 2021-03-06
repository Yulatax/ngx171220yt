import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {pluck} from 'rxjs/operators';

@Component({
  selector: 'course-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.scss']
})
export class OneProductComponent implements OnInit {

  public product$ = this.activatedRoute.data
    .pipe(
      pluck('product')
    );

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((v) => {
      console.log(v);
    });
  }

}
