import { nanoid } from 'nanoid';
import { CartItem, CartType } from '../../core/types';
export class Cart implements CartType {
  id = nanoid();
  items: CartItem[] = [];
}
