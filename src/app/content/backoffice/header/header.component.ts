import {Component, Input, OnInit} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';
import {IExchangeRate} from './exchange-rates/exchange-rates.component';
import {IRootState} from '../../../store';
import {Store} from '@ngrx/store';
import {totalProducts} from '../../../store/selector/cart.selector';

@Component({
  selector: 'course-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  public titleText = '';

  @Input()
  public sideNavDrawer!: MatDrawer;

  public exchangeRates: IExchangeRate[] = [
    {value: 28, currency: 'USD'},
    {value: 0.33, currency: 'RUB'},
    {value: 33, currency: 'EUR'}
  ];

  public cartProductsCount$ = this.store.select(totalProducts);

  constructor(
    private readonly store: Store<IRootState>
  ) { }

  ngOnInit(): void {
  }
}
