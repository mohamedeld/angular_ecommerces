import { httpResource } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { API_URL } from '../token/baseUrl';
import { Filter, Product } from '../core/types';

@Service()
export class Products {
  private baseUrl = inject(API_URL);

  getProducts() {
    return httpResource<Product[]>(() => `${this.baseUrl}/products`);
  }

  getTypes() {
    return httpResource<Filter[]>(() => `${this.baseUrl}/types`);
  }
  getBrands() {
    return httpResource<Filter[]>(() => `${this.baseUrl}/brands`);
  }
}
