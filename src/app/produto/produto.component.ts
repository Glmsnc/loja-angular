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
    this.productService.addInBasket(produto);
    if (!localStorage[produto.name]) {
      localStorage[produto.name] = JSON.stringify({qtd: 1, ...produto});
  }else{
    const p =JSON.parse(localStorage[produto.name])
    p.qtd++;
    localStorage[produto.name] = JSON.stringify(p);
    console.log('lS',localStorage[produto.name] );
  }
  }

}
