import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../services/product/product';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
  @Input() product: any;
  products: Array<Product>;
  constructor(private productService: ProductService, ) { }
  
  ngOnInit() {
    console.log('product', this.product)
    this.products = this.productService.getAll();
  }

  addProduto(produto){
    this.productService.addInBasket(produto);
    const stored = JSON.parse(sessionStorage.getItem('lista'));
    let lista: Array<any> =[];
    
    if(stored){
      if(stored.some(el => el.name === produto.name)){
        stored.map(item=>{
          if(item.name === produto.name) item.qtd++;
          return item;
        })
      }else{
        lista.push({qtd: 1, ...produto});
      }
      
      lista = [...lista, ...stored];
    }else{
      lista.push({qtd: 1, ...produto}); 
    }
    
    sessionStorage.setItem('lista', JSON.stringify(lista));
   
  }
  

}
