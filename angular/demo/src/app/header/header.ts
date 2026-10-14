import { Component } from '@angular/core';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-header',
  imports: [Footer],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
