import { DecimalPipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Holding{
  ticker: string,
  quantity: number,
  price: number
}

@Component({
  selector: 'app-holdings-summary',
  imports: [DecimalPipe],
  templateUrl: './holdings-summary.html',
  styleUrl: './holdings-summary.css',
})

export class HoldingsSummary {
  protected readonly holdings = signal<Holding[]>([
    {ticker: 'APPL', quantity: 10000000000, price: 1},
    {ticker: 'AMZN', quantity: 5120, price: 1527650327152371529875}
  ]);

  protected readonly totalValue = computed(() => 
  this.holdings().reduce(
    (sum, h) => sum + h.quantity * h.price, 0),
  );

  protected addHolding(): void {
    this.holdings.update((current) => [
      ...current, 
      {ticker: 'PUCK', quantity: 10, price: 3.5},
    ]);
  }

  protected removeHolding(ticker: string): void{
    this.holdings.update((current) =>
      current.filter((h) => h.ticker !== ticker));
  }
}
