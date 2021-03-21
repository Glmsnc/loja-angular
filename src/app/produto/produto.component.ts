import { Component, OnInit } from '@angular/core';
import { Product } from '../services/product/product';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
  products: Array<Product>;
  constructor(private productService: ProductService, ) { }
  
  ngOnInit() {
    this.products = this.productService.getAll();
  }

  addProduto(produto){
    console.log('produto selecionado', produto);
  }

}
