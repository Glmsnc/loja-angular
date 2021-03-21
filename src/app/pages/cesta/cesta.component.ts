import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.scss']
})
export class CestaComponent implements OnInit {

  constructor(private productService: ProductService,) { }

  ngOnInit() {
    console.log('teste')
    
    let basket = (<any>Object).assign({}, localStorage);
    console.log('cesta', basket)
    this.productService.listBasket().subscribe(item =>{
      console.log('a', item);
    })
  }

}
