import { CurrencyPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Products } from '../../../services/products';

@Component({
  imports: [MatButton, MatIcon, RouterLink, CurrencyPipe],
  selector: 'app-product-details',
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export default class ProductDetails {
  id = input('');
  private readonly productsService = inject(Products);

  productResource = this.productsService.getProduct(this.id);
}
