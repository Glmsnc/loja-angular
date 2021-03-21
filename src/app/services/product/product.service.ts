import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products :Array<Product> = [{
    name: "Cadeira teste",
    desc:"teste",
    price:"R$1000",
  },{
    name: "Cadeira 2",
    desc:"teste",
    price:"R$1000",
  },]
  constructor() {}
  
  
  getAll(): Array<Product> {
      return this.products;
  }
  
}
