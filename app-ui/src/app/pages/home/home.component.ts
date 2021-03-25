import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/services/product/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  products: Array<Product>;
  constructor(private productService: ProductService,) { }

  ngOnInit() {
   // this.products = this.productService.getAll();
    this.productService.getProducts().subscribe(result=>
       this.products = result,
       error => console.log(error))
  }

}
