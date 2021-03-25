import { Component, Input, OnInit } from '@angular/core';
import { ProductsInBasket } from '../services/product/basket';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
  @Input() product: any;
  products: Array<ProductsInBasket> = new Array<ProductsInBasket>();
  constructor(private productService: ProductService, ) { }
  
  ngOnInit() {
    this.productService.listBasket().subscribe(
      result =>{
        console.log('init')
        this.products = result;
      },
      error =>{
        console.error(error);
      }
    );
  }

  addProduto(produto){
    console.log('initPr', this.products)
   const tempArray = this.products
    if(tempArray.some(el => el.name === produto.name)){
      this.products.map(item=>{
        if(item.name === produto.name) item.qtd++;
        return item;
      })
    }else{
      console.log('aqui?')
      this.products.push({qtd: 1, ...produto});
    }
    
    this.productService.addInBasket(this.products).subscribe();
   
    console.log('FimProducts',this.products)
  }
  

}
