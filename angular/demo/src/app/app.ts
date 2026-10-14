import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { HoldingsSummary } from './holdings-summary/holdings-summary';
import { Pipes } from './pipes/pipes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, HoldingsSummary, Pipes],
  templateUrl: './app.html',
  styleUrl: './app.css',
  // template: `
  //   <h1>Hello World!</h1>
  //   <div>{{city}}</div>
  // `,
  // styles: `
  //   h1 {
  //     color: blue
  //   }
  // `,
})

export class App {
  protected readonly title = signal('demo');
  city:string = "Charlotte";
}
