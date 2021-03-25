import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductsInBasket } from './basket';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private stateProduct$ = new BehaviorSubject<any>(null);
    private subject = new Subject<any>();

    
    state$: Observable<any> = this.stateProduct$.pipe(
    );
  products :Array<Product> = new Array<Product>();
  constructor(private http: HttpClient,  @Inject('BASE_URL') private baseUrl: string) {}
  
  
  getProducts(): Observable<any> {
    const configURL = this.baseUrl + '/product';
    return this.http.get<Product[]>(configURL);

  }
 
  listBasket(): Observable<ProductsInBasket[]>{
    const uuid = sessionStorage.getItem('uuid');
    const configURL = this.baseUrl + `/product/${uuid}`;
    
    return this.http.get<ProductsInBasket[]>(configURL).pipe( map(result=> {
      this.products = result;
      return result;
    }));
  }
  addInBasket(products: ProductsInBasket[]):Observable<any>{
    
    const configURL = this.baseUrl + '/product';
   return this.http.post<string>(configURL, products).pipe(
      map(uuid =>{
        sessionStorage.setItem('uuid', uuid);
        console.log('uuid',uuid)
      })
    );
  }
  
}
