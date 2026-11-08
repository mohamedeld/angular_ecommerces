import { HttpResourceRef } from '@angular/common/http';

export interface Product {
  id: string;
  Name: string;
  Description: string;
  Price: number;
  PictureUrl: string;
  Type: string;
  Brand: string;
  QuantityInStock: number;
}
export interface Filter {
  id: number;
  name: string;
}

export interface FilterDialogData {
  brands: HttpResourceRef<Filter[]>;
  types: HttpResourceRef<Filter[]>;
}
export interface FilterDialogResult {
  brandIds: string[];
  typeIds: string[];
}

export interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type CartType = {
  id: string;
  items: CartItem[];
};
export type CartItem = {
  productId: number;
  productName: string;
  price: number;
  quantity: number;
  pictureUrl: string;
  brand: string;
  type: string;
};
