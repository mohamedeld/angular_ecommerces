import { Component, input } from '@angular/core';
import { Product } from '../../../core/types';
import { MatCardModule } from '@angular/material/card';
import { CurrencyPipe } from '@angular/common';
import { MatAnchor } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  imports: [MatCardModule, CurrencyPipe, MatAnchor, MatIcon],
  selector: 'app-product-item',
  styleUrl: './product-item.css',
  templateUrl: './product-item.html',
})
export class ProductItem {
  product = input<Product>();
}
