import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    private subject = new Subject<any>();

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

  listBasket(): Observable<Product>{
    return this.subject.asObservable();
  }
  addInBasket(product: Product){
    this.subject.next(product);
  }
  
}
