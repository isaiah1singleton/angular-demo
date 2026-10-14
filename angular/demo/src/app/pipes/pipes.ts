import { CurrencyPipe, DatePipe, DecimalPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { getCurrentInjector } from '@angular/core/primitives/di';

@Component({
  selector: 'app-pipes',
  imports: [UpperCasePipe, DatePipe, DecimalPipe, CurrencyPipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {
  country = "Spain";

  birthday: Date = new Date();

  amount: number = 52.67281;

  currency: number = 7323.1253683;
}
