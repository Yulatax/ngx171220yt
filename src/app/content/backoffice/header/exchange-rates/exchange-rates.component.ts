import {Component, Input, OnInit} from '@angular/core';
import {ExchangeAutoplayMode} from './exchange-rates.directive';

export interface IExchangeRate {
  value: number;
  currency: string;
}
@Component({
  selector: 'course-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.scss']
})
export class ExchangeRatesComponent implements OnInit {

  @Input()
  public rates: IExchangeRate[] = [];

  public mode: ExchangeAutoplayMode = ExchangeAutoplayMode.ON;

  public ms = 4000;

  constructor() { }

  ngOnInit(): void {
  }

}
