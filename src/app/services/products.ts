import { HttpParams, httpResource } from '@angular/common/http';
import { inject, Service, Signal } from '@angular/core';
import { API_URL } from '../token/baseUrl';
import { Filter, Product } from '../core/types';

@Service()
export class Products {
  private baseUrl = inject(API_URL);

  getProducts(brands?: Signal<string[]>, types?: Signal<string[]>) {
    return httpResource<Product[]>(() => {
      const selectedBrands = brands?.() ?? [];
      const selectedTypes = types?.() ?? [];

      const params = new URLSearchParams();

      if (selectedBrands.length > 0) {
        params.set('brands', selectedBrands.join(','));
      }

      if (selectedTypes.length > 0) {
        params.set('types', selectedTypes.join(','));
      }

      const queryString = params.toString();

      return `${this.baseUrl}/products${queryString ? `?${queryString}` : ''}`;
    });
  }

  getProduct(id: Signal<string>) {
    return httpResource<Product | null>(() => `${this.baseUrl}/products/${id()}`);
  }
  getTypes() {
    return httpResource<Filter[]>(() => `${this.baseUrl}/types`);
  }
  getBrands() {
    return httpResource<Filter[]>(() => `${this.baseUrl}/brands`);
  }
}
