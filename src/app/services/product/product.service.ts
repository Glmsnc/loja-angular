import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private stateProduct$ = new BehaviorSubject<any>(null);
    private subject = new Subject<any>();

    state$: Observable<any> = this.stateProduct$.pipe(
    );
  products :Array<Product> = [{
    url:"https://images-americanas.b2w.io/produtos/01/00/img/1332853/5/1332853528_1GG.jpg",
    name: "Cadeira 1",
    desc:"teste",
    price: 1000,
  },{
    url:"https://images-americanas.b2w.io/produtos/01/00/img/1332853/5/1332853528_1GG.jpg",
    name: "Cadeira 2",
    desc:"teste",
    price: 1000,
  },{
    url:"https://images-americanas.b2w.io/produtos/01/00/img/1332853/5/1332853528_1GG.jpg",
    name: "Cadeira 3",
    desc:"teste",
    price: 1000,
  },{
    url:"https://images-americanas.b2w.io/produtos/01/00/img/1332853/5/1332853528_1GG.jpg",
    name: "Cadeira 4",
    desc:"teste",
    price: 1000,
  },{
    url:"https://images-americanas.b2w.io/produtos/01/00/img/1332853/5/1332853528_1GG.jpg",
    name: "Cadeira 5",
    desc:"teste",
    price: 1000,
  },{
    url:"https://images-americanas.b2w.io/produtos/01/00/img/1332853/5/1332853528_1GG.jpg",
    name: "Cadeira 6",
    desc:"teste",
    price: 1000,
  },{
    url:"https://images-americanas.b2w.io/produtos/01/00/img/1332853/5/1332853528_1GG.jpg",
    name: "Cadeira 7",
    desc:"teste",
    price: 1000,
  },{
    url:"https://images-americanas.b2w.io/produtos/01/00/img/1539027/7/1539027784_1GG.jpg",
    name: "Maquina de lavar",
    desc:"teste",
    price: 1000,},
    {
    url:"https://images-americanas.b2w.io/produtos/01/00/img/2031917/0/2031917006_1GG.jpg",
    name: "TV",
    desc:"TV 55",
    price: 4000,
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
