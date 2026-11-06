import { Component, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Products } from '../../services/products';
import { Error } from '../../shared/error/error';
import { EmptyState } from '../../shared/empty-state/empty-state';
import { ProductItem } from './product-item/product-item';
import { FilterDialog } from './filter-dialog/filter-dialog';
import { MatAnchor } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  imports: [Error, EmptyState, ProductItem, MatAnchor, MatIcon],
  selector: 'app-shop',
  styleUrl: './shop.css',
  templateUrl: './shop.html',
})
export default class Shop {
  private readonly productsService = inject(Products);
  private dialogService = inject(MatDialog);
  selectedBrands = signal<string[]>([]);
  selectedTypes = signal<string[]>([]);

  brands = this.productsService.getBrands();
  types = this.productsService.getTypes();
  productsResource = this.productsService.getProducts(this.selectedBrands, this.selectedTypes);

  openFiltersDialog() {
    const dialogRef = this.dialogService.open(FilterDialog, {
      minWidth: '500px',
      data: {
        brands: this.brands,
        types: this.types,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('first', result);
        this.selectedBrands.set(result.brandIds);
        this.selectedTypes.set(result.typeIds);
      }
    });
  }
}
