import {Component, Input, OnInit} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';
import {IExchangeRate} from './exchange-rates/exchange-rates.component';

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

  constructor() { }

  ngOnInit(): void {
  }
}
